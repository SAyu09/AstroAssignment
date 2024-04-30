# AstroAssignment
# Astrologer Connection Backend
## AstroAssignment 
This repository contains the source code for the AstroAssignment project.

Folder Structure
node_modules: This folder contains the dependencies installed for the project.
src: The source code of the project is located in this directory.
controllers: This directory contains controller files responsible for handling business logic and interacting with models.
astrologerController.js: Controller file for handling astrologer-related operations.
connectController.js: Controller file for handling connection-related operations.
userController.js: Controller file for handling user-related operations.
models: This directory contains model files defining the structure of data entities used in the project.
astrologerModel.js: Model file defining the schema for astrologer data.
userModel.js: Model file defining the schema for user data.
routes: This directory contains route files defining the endpoints and their corresponding controller functions.
astrologerRoutes.js: Route file defining endpoints related to astrologers.
connectRoutes.js: Route file defining endpoints related to connections.
userRoutes.js: Route file defining endpoints related to users.
test: This folder contains test files for testing the functionality of the project.
README.md: This file contains information about the project, its structure, and usage instructions.
app.js: Entry point of the application.
package-lock.json: Auto-generated file that locks the version of each package installed.
package.json: File containing metadata and dependencies of the project.

This project implements a backend system for connecting users with astrologers. It includes a flow distribution algorithm designed to allocate users to astrologers in a fair and balanced manner while allowing flexibility to adjust flow for top astrologers.
## API Endpoints

1. User Routes
i.Create User
 ii.  Method: POST
  iii.    Endpoint: /user
   iv.  Description: Create a new user.
   v.   Request Body: JSON object containing user details (e.g., name, preferences).
   vi.  Response: JSON object with a message indicating success or failure, along with user information if created successfully.
Example: {
  "name": "John Doe",
  "preferences": {
    "zodiacSign": "Leo",
    "language": "English"
  }
}
2. Astrologer Routes
     i. Create Astrologer
    ii.  Method: POST
    iii. Endpoint: /astrologer
    iv.  Description: Create a new astrologer.
    v.  Request Body: JSON object containing astrologer details (e.g., name).
  vi.  Response: JSON object with a message indicating success or failure, along with astrologer information if created successfully.
  Example:{
       "name": "Astrologer A"
     }
3. Connection Routes
       i. Connect User with Astrologer
       ii. Method: POST
      iii. Endpoint: /connect
      iv. Description: Connect a user with an available astrologer based on preferences.
      v. Request Body: JSON object containing user ID.
     vi.  Response: JSON object with a message indicating success or failure, along with user and astrologer information if connected successfully.
     Example:{
          "userId": "123456789"
          }


## Features

- Fair distribution algorithm for allocating users to astrologers.
- Adjustable flow mechanism for top astrologers.
- RESTful API endpoints for controlling flow distribution and toggling settings.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SAyu09/AstroAssignment.git
2. cd AstroAssignment
3.npm install
4. npm start
