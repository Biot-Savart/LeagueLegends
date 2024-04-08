# Start with a Node base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy backend and frontend to the container
COPY . /backend

# Install backend dependencies
WORKDIR /backend
RUN npm install

# Move back to the app directory
WORKDIR /app

# Expose the port your backend listens on
EXPOSE 4000

# Command to start both backend and frontend
CMD ["sh", "-c", "cd /backend && npm start"]

