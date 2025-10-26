# Stage 1: Build the Astro site
FROM node:20-slim AS builder

WORKDIR /app

# Copy all source files first
COPY . .

# Remove any node_modules and package-lock that might have been copied
RUN rm -rf node_modules package-lock.json

# Reinstall to generate fresh package-lock and install correct binaries
RUN npm install

# Build the static site
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
