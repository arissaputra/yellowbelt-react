# Use a Node.js image as a base
FROM node:latest AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React Vite application
RUN npm run build

# Stage 2: Serve the application using a lightweight Node.js server
FROM node:latest

# Set the working directory for the runtime container
WORKDIR /app

# Copy the built assets from the previous stage
COPY --from=build /app/dist ./dist

# Install serve to run the application
RUN npm install -g serve

# Expose the port that the server will run on
EXPOSE 5173

# Command to run the application
CMD ["serve", "-s", "dist", "-l", "5173"]
