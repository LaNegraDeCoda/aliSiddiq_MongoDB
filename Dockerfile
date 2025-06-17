# 1. Use a lightweight Node base image
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package files first (for Docker layer caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of your app code
COPY . .

# 6. Expose the port your Express app uses (often 3000)
EXPOSE 3000

# 7. Start your server
CMD ["node", "server.js"]
