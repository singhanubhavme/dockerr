# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the entire frontend directory to the working directory
COPY . .

# Build the frontend app
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Set the command to start the app
CMD ["npm", "start"]
