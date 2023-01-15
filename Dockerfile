# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application's files
COPY . .

# Build the application
RUN npm run build

# Expose the port the application will run on
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]