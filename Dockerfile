# Use Node.js 18
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the app (for Next.js)
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
