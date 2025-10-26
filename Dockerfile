# Stage 1: Build the Astro site
FROM --platform=linux/amd64 node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (use npm install instead of npm ci to properly handle optional deps)
RUN npm install

# Copy source files (node_modules should be excluded via .dockerignore)
COPY . .

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
