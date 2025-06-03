# Privacy Scrub Mobile App

A comprehensive privacy protection application that helps users find and remove their personal information from people search and background check websites.

## Features

- **User Authentication**: Secure login and registration system
- **Data Search**: Search across 50+ people search websites
- **Automated Removal**: SCRUB feature for paid accounts
- **Payment Processing**: Stripe integration for premium features
- **Admin Portal**: User management and system administration
- **Mobile Apps**: Native iOS and Android applications

## Technology Stack

- **Frontend**: React.js with TypeScript
- **Backend**: Node.js with Express
- **Database**: PostgreSQL with Drizzle ORM
- **Mobile**: Capacitor for cross-platform mobile apps
- **Payment**: Stripe for secure payment processing

## Building Mobile Apps

### Android APK
The Android project is automatically built using GitHub Actions:
1. Push code to trigger the build
2. Download APK from the "Actions" tab artifacts
3. APK files are generated for both debug and release versions

### iOS App
Open the iOS project in Xcode:
```bash
npx cap open ios
```

## Development

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Stripe account for payments

### Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables
4. Run development server: `npm run dev`

## Mobile Build Status

![Build Android APK](https://github.com/yourusername/privacy-scrub/workflows/Build%20Privacy%20Scrub%20Android%20APK/badge.svg)

## License

MIT License