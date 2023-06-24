# Use an official Node.js runtime as a parent image
FROM node:14-alpine as build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the app for production
RUN npm run build

# Install serve globally
#RUN npm install -g serve

# Set the command to start the server
#CMD ["serve", "-s", "build"]

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 3000 for the server to listen on
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
