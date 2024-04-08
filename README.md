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

## Running the Application with Docker Compose

This application is configured to run with Docker Compose, making it easy to manage and run both the frontend and backend services in separate containers with a single command.

### Prerequisites

- Docker
- Docker Compose

Ensure you have Docker and Docker Compose installed on your machine. For installation instructions, refer to the [official Docker documentation](https://docs.docker.com/get-docker/) and the [official Docker Compose documentation](https://docs.docker.com/compose/install/).

### Build and Run

1. **Clone the Repository**

   If you haven't already, clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Build and Start the Containers**

   From the root directory of the project, where the `docker-compose.yml` file is located, run the following command to build your Docker images (if they haven't been built) and start the containers:

   ```bash
   docker-compose up --build
   ```

   The `--build` option ensures that Docker images are built using the latest version of your application. If the images were previously built and you haven't made any changes to the Dockerfiles or the build context, you can omit the `--build` option to speed up the startup process:

   ```bash
   docker-compose up
   ```

3. **Accessing the Application**

   Once the containers are running, you can access the frontend application in your browser at:

   - `http://localhost:3000` (or another port if you've configured it differently in your `docker-compose.yml` file)

   And you can access the backend API at:

   - `http://localhost:4000` (again, this port may differ based on your configuration)

4. **Stopping the Containers**

   To stop the Docker containers, press `Ctrl+C` in the terminal where the containers are running. If you started the containers in detached mode (using `docker-compose up -d`), you can stop them with the following command:

   ```bash
   docker-compose down
   ```

This setup provides a convenient way to build, run, and manage your application's frontend and backend services with Docker Compose.

## Contributing

We welcome contributions to the LeagueLegends project. Please read our contributing guidelines before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Biot-Savart/LeagueLegends/blob/main/LICENSE) file for details.
