# AstroAssignment

## Astrologer Connection Backend

This repository contains the source code for the AstroAssignment project, which implements a backend system for connecting users with astrologers.

### Folder Structure

- `node_modules`: Contains the dependencies installed for the project.
- `src`: Source code directory.
  - `controllers`: Contains controller files responsible for handling business logic and interacting with models.
    - `astrologerController.js`: Controller file for handling astrologer-related operations.
    - `connectController.js`: Controller file for handling connection-related operations.
    - `userController.js`: Controller file for handling user-related operations.
  - `models`: Contains model files defining the structure of data entities used in the project.
    - `astrologerModel.js`: Model file defining the schema for astrologer data.
    - `userModel.js`: Model file defining the schema for user data.
  - `routes`: Contains route files defining the endpoints and their corresponding controller functions.
    - `astrologerRoutes.js`: Route file defining endpoints related to astrologers.
    - `connectRoutes.js`: Route file defining endpoints related to connections.
    - `userRoutes.js`: Route file defining endpoints related to users.
  - `test`: Contains test files for testing the functionality of the project.
- `README.md`: Contains information about the project, its structure, and usage instructions.
- `app.js`: Entry point of the application.
- `package-lock.json`: Auto-generated file that locks the version of each package installed.
- `package.json`: File containing metadata and dependencies of the project.

### Project Description

This project implements a backend system for connecting users with astrologers. It includes a flow distribution algorithm designed to allocate users to astrologers in a fair and balanced manner while allowing flexibility to adjust flow for top astrologers.

### API Endpoints

1. **User Routes**
   - **Create User**
     - Method: POST
     - Endpoint: /user
     - Description: Create a new user.
     - Request Body: JSON object containing user details (e.g., name, preferences).
     - Response: JSON object with a message indicating success or failure, along with user information if created successfully.
     Example:
     ```json
     {
       "name": "John Doe",
       "preferences": {
         "zodiacSign": "Leo",
         "language": "English"
       }
     }
     ```

2. **Astrologer Routes**
   - **Create Astrologer**
     - Method: POST
     - Endpoint: /astrologer
     - Description: Create a new astrologer.
     - Request Body: JSON object containing astrologer details (e.g., name).
     - Response: JSON object with a message indicating success or failure, along with astrologer information if created successfully.
     Example:
     ```json
     {
       "name": "Astrologer A"
     }
     ```

3. **Connection Routes**
   - **Connect User with Astrologer**
     - Method: POST
     - Endpoint: /connect
     - Description: Connect a user with an available astrologer based on preferences.
     - Request Body: JSON object containing user ID.
     - Response: JSON object with a message indicating success or failure, along with user and astrologer information if connected successfully.
     Example:
     ```json
     {
       "userId": "123456789"
     }
     ```

### Features

- Fair distribution algorithm for allocating users to astrologers.
- Adjustable flow mechanism for top astrologers.
- RESTful API endpoints for controlling flow distribution and toggling settings.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SAyu09/AstroAssignment.git
cd AstroAssignment
npm install
npm start
This readme provides a clear overview of the project structure, API endpoints, features, and installation instructions. Let me know if you need any further assistance!
