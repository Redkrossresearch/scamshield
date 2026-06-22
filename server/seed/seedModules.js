require('dotenv').config();
const Admin = require('../models/Admin');
const Module = require('../models/Module');
const connectDB = require('../config/db');

// Load modules data
const MODULES_DATA = require('./modulesData');

const seed = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log('🌱 Starting seed...\n');

    // ─── SEED ADMIN ────────────────────────────────────────────────
    console.log('👤 Creating admin user...');

    const adminUsername = (process.env.ADMIN_USERNAME || 'admin').toLowerCase();
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    // Delete existing admin to start fresh
    await Admin.deleteMany({});

    const admin = new Admin({
      username: adminUsername,
      password_hash: adminPassword,
      role: 'admin',
      active: true
    });
    await admin.save();
    console.log(`   ✅ Admin created: ${adminUsername}`);
    console.log(`   🔑 Password: ${adminPassword}\n`);

    // ─── SEED MODULES ──────────────────────────────────────────────
    console.log(`📦 Seeding ${MODULES_DATA.length} modules...`);

    // Delete all existing modules first
    await Module.deleteMany({});

    let successCount = 0;
    for (const moduleData of MODULES_DATA) {
      try {
        const mod = new Module(moduleData);
        await mod.save();
        console.log(`   ✅ Module ${mod.module_id}: ${mod.title}`);
        successCount++;
      } catch (err) {
        console.error(`   ❌ Failed module ${moduleData.module_id}:`, err.message);
      }
    }

    console.log(`\n🎉 Seed complete!`);
    console.log(`\n📊 Summary:`);
    console.log(`   👤 Admin: ${adminUsername} / ${adminPassword}`);
    console.log(`   📦 Modules seeded: ${successCount}/${MODULES_DATA.length}`);
    console.log(`\n🚀 Next steps:`);
    console.log(`   1. Server should be running (npm run dev)`);
    console.log(`   2. Test: curl.exe http://localhost:5000/api/modules`);
    console.log(`   3. Login: POST /api/auth/login`);

    process.exit(0);

  } catch (error) {
    console.error('❌ Seed error:', error);
    process.exit(1);
  }
};

// Run it
seed();