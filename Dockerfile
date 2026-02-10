FROM node:18-alpine
WORKDIR /app

# Copy from backend folder
COPY backend/package*.json ./
RUN npm install

# Copy all backend files
COPY backend/ ./

EXPOSE 3000
CMD ["npm", "start"]
