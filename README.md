# Slash Realty

[Live Site Link](https://slash-realty.web.app/)

## Overview
Slash Realty is a modern real estate website focusing exclusively on **Residential Properties**. The platform offers users the ability to browse, view, and interact with detailed listings of residential properties, ensuring a seamless and engaging experience.

---

## Features
1. **User Authentication**:
   - Email and password-based registration and login.
   - Google social login.
   - Firebase authentication integration for secure user management.

2. **Responsive Design**:
   - Fully responsive across mobile, tablet, and desktop devices.

3. **Dynamic Estate Listings**:
   - JSON-based property data with essential details like price, area, facilities, and location.
   - "View Property" redirects to a protected details page.

4. **Interactive Elements**:
   - Show/hide password functionality on registration.
   - AOS animations for smooth transitions and engaging user experience.
   - Swiper slider for the homepage banner.

5. **Protected Routes**:
   - Estate details and user profile pages are accessible only after login.

6. **Additional Pages**:
   - Custom 404 page for unmatched routes.
   - Extra protected route to display user details with edit functionality.

---

## Technologies Used
- **Frontend**: React.js, Tailwind CSS, Daisy UI
- **Backend**: Firebase Authentication, Firebase Hosting, Firebase Storage
- **Packages**:
  - `React Hook Form` for seamless form validation
  -Packages:

   - `firebase` ^11.1.0

   - `leaflet` ^1.9.4

   - `react-fast-marquee` ^1.6.5

   - `react-hook-form` ^7.54.2 for seamless form validation

   - `react-hot-toast` ^2.5.1 for elegant toast notifications

   - `react-icons` ^5.4.0 for a wide range of customizable icons

   - `react-leaflet` ^5.0.0-rc.2 for interactive maps

   - `react-router-dom` ^7.1.1 for declarative routing

   - `react-spinners` ^0.15.0 for adding loading indicators

---

## Key Sections
### Home Page
- **Navbar**:
  - Dynamic navbar displaying user profile or login/logout options based on authentication state.
- **Slider**:
  - A visually appealing slider showcasing promotional banners.
- **Estate Listings**:
  - Card-based layout displaying property images, details, and "View Property" buttons.
- **Footer**:
  - Comprehensive footer with navigation links and additional information.

### Login and Register Pages
- **Login**:
  - Email/password login and Google login.
  - Error handling with toast notifications for invalid credentials.
- **Register**:
  - Password validation (uppercase, lowercase, minimum 6 characters).
  - Toast notifications for successful registration.

### Protected Routes
- **Estate Details**:
  - Detailed view of a selected property with additional information.
  - Redirects to login for unauthorized access.
- **User Profile**:
  - Editable form displaying user details with Firebase's `updateProfile` method.

### 404 Page
- Custom-designed "Not Found" page for unmatched routes.

---

## Deployment
- The project is deployed using **Firebase Hosting**: [Slash Realty Live](https://slash-realty.web.app/)

---

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd slash-realty
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file with your Firebase configuration:
   ```env
   REACT_APP_API_KEY=your-api-key
   REACT_APP_AUTH_DOMAIN=your-auth-domain
   REACT_APP_PROJECT_ID=your-project-id
   REACT_APP_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_APP_ID=your-app-id
   ```
5. Run the development server:
   ```bash
   npm start
   ```

---

