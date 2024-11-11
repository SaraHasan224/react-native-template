# MyNewApp

Welcome to **MyNewApp**, a sample React Native application built with [Expo](https://expo.dev/). This project demonstrates how to set up and integrate error tracking and performance monitoring using [Sentry](https://sentry.io/).

## Table of Contents
- [MyNewApp](#mynewapp)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Setup and Installation](#setup-and-installation)
  - [Features](#features)
  - [Testing Error Tracking](#testing-error-tracking)
  - [Sentry Configuration](#sentry-configuration)
    - [Setup Instructions](#setup-instructions)
  - [Troubleshooting](#troubleshooting)

## Overview
**MyNewApp** is a simple mobile app designed to illustrate the integration of Sentry for comprehensive error and performance tracking. It includes a minimal UI and features to intentionally throw errors and simulate native crashes, helping you test Sentry's functionality in a development environment.

## Setup and Installation
To get started, clone this repository and set up the project:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/MyNewApp.git
   cd MyNewApp
    ```

Install Dependencies::
   ```bash
npm install
  ```
Start the Expo Development Server:

```bash
expo start
```

2 **Usage**:
- **Run on Device**: Use the Expo Go app to scan the QR code and run the app on your mobile device.
- **Run on Emulator**: Launch the app using an iOS or Android emulator from your development environment.

## Features
- **Sentry Integration**: Captures JavaScript and native errors for monitoring and debugging.
- **Error Testing Buttons**: Manually trigger errors to see them reported in Sentry.
- **Native Crash Simulation**: Simulate native crashes to test Sentry (requires a custom development build).

## Testing Error Tracking
1. **Trigger a JavaScript Error**:
   - Tap the "Trigger Error" button to throw a JavaScript error that will be captured by Sentry.

2. **Simulate a Native Crash**:
   - Tap the "Trigger Native Crash" button to simulate a native crash. Note that this feature may require a custom Expo build or the Bare Workflow to function correctly.
## Sentry Configuration
The app is configured to use `sentry-expo` for error tracking:

```javascript
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN', // Your Sentry DSN
  enableInExpoDevelopment: true, // Enables error tracking in development
  debug: true, // Set to false in production
});
```
### Setup Instructions

- Replace `YOUR_SENTRY_DSN` with the DSN from your Sentry project settings.
- Errors and crashes will be sent to your Sentry dashboard for monitoring.

## Troubleshooting

- **Error Not Captured in Sentry**:
  - Verify the Sentry DSN and ensure the app is correctly initialized.
  - If using Expo Go, be aware that native crashes may not be fully supported.
  - Consider creating a custom development build or ejecting to the Bare Workflow for complete native support.
- **Check for Debug Logs**: Use `debug: true` in the Sentry configuration to monitor setup logs in the console.
