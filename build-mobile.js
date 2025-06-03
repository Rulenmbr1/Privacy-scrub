#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building web app for mobile...');

try {
  // Build the frontend only (skip server build for mobile)
  console.log('Step 1: Building frontend with Vite...');
  execSync('npx vite build --mode mobile', { stdio: 'inherit' });
  
  // Check if dist folder exists and has index.html
  if (!fs.existsSync('dist')) {
    console.error('Build failed: dist folder not created');
    process.exit(1);
  }
  
  if (!fs.existsSync('dist/index.html')) {
    console.error('Build failed: index.html not found in dist folder');
    process.exit(1);
  }
  
  console.log('✓ Frontend build complete');
  
  // Sync with Capacitor
  console.log('Step 2: Syncing with Capacitor...');
  execSync('npx cap sync', { stdio: 'inherit' });
  
  console.log('✓ Capacitor sync complete');
  console.log('\nMobile build ready! You can now:');
  console.log('- Run: npx cap open android (to open in Android Studio)');
  console.log('- Run: npx cap run android (to build and run on device)');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}