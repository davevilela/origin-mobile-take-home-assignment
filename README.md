# Origin Mobile Take-home Assignment

My submission for Origin's Mobile Take-home Assignment

## Running Locally

1. Set up your development environment

Make sure you have followed these steps for setting up android and iOS local development:
https://docs.expo.dev/guides/local-app-development/#android

2. Clone the repository
```bash
git clone https://github.com/davevilela/origin-mobile-take-home-assignment
cd origin-mobile-take-home-assignment
```

3. Install dependencies
```bash
npm i
```

4. Run Expo Prebuild to generate native iOS and Android directories
```bash
npm run prebuild
```

5. Set up environment variables
   1. Create .env file on the root directory
   2. Provide the following environment variables
   ```bash
    EXPO_PUBLIC_SUPABASE_URL=
    EXPO_PUBLIC_SUPABASE_ANON_KEY=
    EXPO_PUBLIC_BASE_API_URL=
    GOOGLEMAPS_API_KEY=
   ```
6. Run the app!

You may use the following commands:

- For iOS:
  ```bash
  npm run ios
  ```
- For Android
  ```bash
  npm run android
  ```

## Project strucute

- **components/**: Reusable UI components like buttons, input fields, etc.
- **features/**: Houses the specific features of the application, such as the SignIn, SignUp, TransactionList, and TransactionDetails components, each encapsulating all related logic.
- **hooks/**: Custom React hooks for managing business logic, fetching data, and handling state that can be reused across components.
- **providers/**: Context providers that supply the React context for global state management, such as user authentication status and theme settings.
- **theme/**: Theme configuration files and utilities using Tamagui to ensure consistent styling across the application.
- **assets/**: Static resources such as images, logos, and icons.
- **supabase/**: Configuration and service files for interacting with the Supabase backend, handling API calls for authentication and data retrieval.
- **lib/**: General utilities and libraries that provide functionality not specific to the application's UI or business logic but necessary for its operation, like utility functions and helper modules.

## Final Considerations about tooling and project structure

### Tooling choices
The choice of Expo, Expo-router, and Tamagui for this project was driven by the goal of achieving code reusability across the mobile and potential web versions. Tamagui allows for a unified styling system that enhances the visual consistency and modularity of the application. By segregating features and visual components, the architecture ensures that platform-specific code remains decoupled from the business logic, thereby simplifying maintenance and scalability.

### Offline Usability
Tanstack Query enhances app functionality offline by using MMKV storage to persist mutations and query data. This setup ensures that user mutations made offline are stored and then replayed once a network connection is available. It also caches query results to minimize network requests, speeding up response times and reducing data usage. By maintaining this data across app restarts, the system ensures data integrity and provides a seamless user experience in varying network conditions.

### Authentication and Storage

Given the absence of an authentication API in the project requirements, I integrated a straightforward authentication and registration flow using Supabase. This choice was intended to fulfill the project's needs efficiently. Additionally, Supabase Storage is utilized for managing the upload and storage of receipts, aligning with the functionality required by the application.

### Overall Design
Overall, the tooling and structure are designed to meet the requirements of a scalable, maintainable, and efficient mobile application that could potentially be extended to a web platform with minimal adjustments.

## BACKLOG

- [x] Project structure
  - [x] Setup Expo
  - [x] Setup Tamagui Theme builder
  - [x] Setup Supabase backend
  - [x] Setup Authentication
  - [x] Setup Tanstack Query
- [x] Features
  - [x] Sign-In Flow
    - [x] Profile screen
    - [ ] Edit user infos
  - [x] Sign-Up Flow
  - [x] File Upload
    - [x] Avatar upload
    - [x] Receipts upload
    - [x] Load image from bucket
  - [x] Transactions service
  - [x] Transactions Listing Page
    - [x] Pull to refresh
    - [x] Pagination
    - [x] Filtering by category
  - [x] Transaction Details Page
    - [x] Pick Latitude and longitude on Map
    - [x] Display location with static map API
    - [x] Upload receipt for transaction
    - [x] Image Viewer
  - [x] Ensure IOS Compatibily
  - [x] Ensure Android Compatibility



