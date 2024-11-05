# ClubNet

ClubNet is a web application for managing and viewing various clubs. It provides features for authentication, listing clubs, and viewing club details.

## Features

- User Authentication
  - Authentication and Session Management with JWT
  - Passwords are hashed using BCrypt
    
- Club Management
  - List, view all clubs
  - List, view upcoming club Events
  - Subscribe to a club
  - Stay updated with new event notifications

## Technologies Used

- Backend
  - Spring Boot
  - Spring Security
  - JWT (Java Web Tokebs) for authentication
  - MongoDB Database
    
- Frontend
  - Next.js
  - Tailwind CSS
    
- Build Tool
  - Maven
  - Npm

## Prerequisites

- Java 17 or higher
- Maven 3.6 or higher
- Node.js 14 or higher (for frontend development)
- npm or yarn (for frontend package management)

## Getting Started

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/clubnet.git
   cd clubnet
   
2. Configure the database (if using a different database):
   Update src/main/resources/application.properties with your database configuration.

3. Build the backend:

   ```bash
   mvn clean install

4. Run the backend:
   
   ```bash
   mvn spring-boot:run
  The backend will be running at http://localhost:8080

### Frontend Setup

1. Navigate to the frontend directory
   
   ```bash
   cd frontend

2. Install the dependencies
   
   ```bash
   npm install
   
3. Run the frontend
   
   ```bash
   npm run dev
   
The frontend will be running at http://localhost:3000

### Running the Application

1. Start the backend server:
   
   ```bash
   mvn spring-boot:run

2. Start the frontend server:
   
   ```bash
   npm run dev
  
3. Open your browser and navigate to http://localhost:3000


## Viewing Clubs
- Access the list of clubs at http://localhost:3000/clubs.
- Click on a club to view its details.
- 
## Authentication
- The application uses basic HTTP authentication.
- Provide your username and password when prompted.
  
## Contributing
- Fork the repository.
- Create a new branch.
- Make your changes.
- Submit a pull request.

Acknowledgements
Thanks to the contributors of Spring Boot, Spring Security, React, and Next.js for their excellent frameworks and tools.
