# LeagueLegends

LeagueLegends is a web application dedicated to providing users with up-to-date information and statistics about players in various football leagues. Utilizing a React-based frontend and a NestJS-powered backend, the project offers a robust platform for football enthusiasts.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Backend Setup

The backend is developed with NestJS, a progressive Node.js framework for building efficient and scalable server-side applications.

1. **Installation**

   Navigate to the `backend` directory and install the dependencies:
   ```bash
   cd backend
   npm install
   ```

2. **Running the Application**

   - For development:
     ```bash
     npm run start:dev
     ```
   - For production:
     ```bash
     npm run start:prod
     ```

3. **Unit Tests**
To run the unit tests for the backend, use the following command:

```
cd backend
npm run test
```
This command runs the Jest test runner in the standard mode.

### Frontend Setup

The frontend is bootstrapped with Create React App, offering a modern setup with React.

1. **Installation**

   Navigate to the `frontend` directory and install the dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. **Running the Application**

   Start the development server:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features

### Backend

- GraphQL API for querying player statistics.
- JWT-based authentication for secure access.
- Services for fetching and processing player data from external APIs.

### Frontend

- Interactive UI built with React.
- Apollo Client for efficient GraphQL data management.
- Tailwind CSS for styling.
- Authentication flow, protected routes, and dynamic player statistics display.

## Contributing

We welcome contributions to the LeagueLegends project. Please read our contributing guidelines before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Biot-Savart/LeagueLegends/blob/main/LICENSE) file for details.
