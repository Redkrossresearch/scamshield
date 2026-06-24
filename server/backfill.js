require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');

(async () => {
  try {
    await connectDB();
    console.log('✅ Connected to MongoDB');
    
    const Attempt = require('./models/Attempt');
    const Session = require('./models/Session');
    const User = require('./models/User');
    
    // Show counts before
    const usersCount = await User.countDocuments();
    const sessionsCount = await Session.countDocuments();
    const attemptsCount = await Attempt.countDocuments();
    
    console.log(`Found ${usersCount} users, ${sessionsCount} sessions, ${attemptsCount} attempts`);
    
    // Get all users
    const users = await User.find({});
    
    if (users.length === 1) {
      // Single user - link everything to them
      const user = users[0];
      console.log(`Single user found: ${user.username}`);
      
      const sessResult = await Session.updateMany(
        { $or: [{ user_id: null }, { user_id: { $exists: false } }] },
        { $set: { user_id: user._id } }
      );
      console.log(`✅ Linked ${sessResult.modifiedCount} sessions`);
      
      const attResult = await Attempt.updateMany(
        { $or: [{ user_id: null }, { user_id: { $exists: false } }] },
        { $set: { user_id: user._id } }
      );
      console.log(`✅ Linked ${attResult.modifiedCount} attempts`);
      
      // Show final counts
      const linkedSessions = await Session.countDocuments({ user_id: user._id });
      const linkedAttempts = await Attempt.countDocuments({ user_id: user._id });
      console.log(`\n📊 Final stats for ${user.username}:`);
      console.log(`   Sessions: ${linkedSessions}`);
      console.log(`   Attempts: ${linkedAttempts}`);
    } else {
      // Multiple users - try to match by recent activity
      console.log(`${users.length} users found. Manual linking needed.`);
      
      // List all users with their creation dates
      for (const user of users) {
        console.log(`  - ${user.username} (created: ${user.created_at})`);
      }
    }
    
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
})();