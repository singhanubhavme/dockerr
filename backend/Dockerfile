# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the entire backend directory to the working directory
COPY . .

# Expose the port on which the app will run
EXPOSE 5000

# Set the command to start the app
CMD ["npm", "start"]
