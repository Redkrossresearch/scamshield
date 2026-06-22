require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Session = require('./models/Session');
const Module = require('./models/Module');

(async () => {
  try {
    await connectDB();

    // Try creating a test session
    const testSession = new Session({
      session_id: 'test_' + Date.now(),
      ip_address: '127.0.0.1'
    });
    await testSession.save();
    console.log('✅ Created test session:', testSession.session_id);

    // Count modules
    const count = await Module.countDocuments();
    console.log(`📦 Modules in DB: ${count} (should be 0 until we seed)`);

    // Clean up test
    await Session.deleteOne({ session_id: testSession.session_id });
    console.log('🗑️  Test session cleaned up');

    process.exit(0);
  } catch (err) {
    console.error('❌ Test failed:', err.message);
    process.exit(1);
  }
})();