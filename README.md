# Airdrop Management System

This is a simple web application that allows users to manage their airdrops. The app includes features like user registration, airdrop tracking, and profile editing. It is built using React for the frontend and Node.js with Express for the backend, connected to MongoDB for data storage.

## Features

1. **User Registration**
   - The user can register with their name, username, and password.
   - After successful registration, the user will be redirected to the homepage with a navigation bar.

2. **Homepage with Airdrop Table**
   - Upon logging in, the user will see a table listing their airdrops.
   - Initially, the table will be empty. A button labeled "Add Airdrop" will be visible on the page, allowing the user to add a new airdrop.

3. **Add Airdrop Form**
   - When the user clicks "Add Airdrop", a form will appear with the following fields:
     - Project Name
     - X Account
     - Referral Link
     - Wallet Used
     - Network
     - Type (Dropdown options: Play to Airdrop, Node, Testnet, DePIN, SocialFi)
     - Device
     - Status
     - Listing Date
   - After filling out the form, the user can submit the details, and the airdrop will be saved in the database.

4. **Airdrop Table Display**
   - Once an airdrop is added, the details will be displayed in the table under the following headers:
     - Project Name
     - X Account
     - Referral Link
     - Wallet Used
     - Network
     - Type
     - Device
     - Status
     - Listing Date
     - Profit/Gain

5. **Editable Profit/Gain Column**
   - The "Profit/Gain" column is editable by the user at any time. The user can update the value directly in the table.

6. **Action Buttons**
   - Each row in the airdrop table will have action buttons for **Edit** and **Delete**.
   - Clicking **Edit** allows the user to modify the airdrop details, and clicking **Delete** will remove the airdrop from both the table and the database.

7. **Profile Section**
   - The user can edit their profile by navigating to the "Profile" page.
   - On the profile page, the user can update their avatar, name, and password.

## Tech Stack

- **Frontend**: React, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS (Custom styles)
