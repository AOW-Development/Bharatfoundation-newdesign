# Use official Node.js runtime as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the Next.js build output
COPY .next ./.next
COPY public ./public
COPY next.config.ts ./

# Expose the port (Cloud Run expects 8080 by default)
ENV PORT=8080
EXPOSE 8080

# Start the Next.js app
CMD ["npm", "start"]