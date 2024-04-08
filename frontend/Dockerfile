# Start with a Node base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy backend and frontend to the container
COPY . /frontend

# Install frontend dependencies and build static files
WORKDIR /frontend
RUN npm install
RUN npm run build

# Move back to the app directory
WORKDIR /app


# Expose the port your backend listens on
EXPOSE 3000

# Command to start both backend and frontend
CMD ["sh", "-c", "cd /frontend && npm start"]

