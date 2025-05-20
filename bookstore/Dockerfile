# Base stage for common setup
FROM node:18-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
COPY nest-cli.json .
RUN npm install -g @nestjs/cli

# Development stage (for local development)
FROM base AS development
RUN npm install
COPY . .
CMD ["npm", "run", "start:dev", "api-gateway"]

# Production builder stage
FROM base AS production-builder
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM base AS production
COPY --from=production-builder /usr/src/app/dist ./dist
COPY --from=production-builder /usr/src/app/node_modules ./node_modules
CMD ["node", "dist/apps/api-gateway/main.js"]