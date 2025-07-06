# Baseline
FROM node:bookworm-slim AS base
RUN npm install -g pnpm
WORKDIR /app
RUN chown -R node:node /app && chmod -R 770 /app
 
# Development build
FROM base AS dev
WORKDIR /app
USER node
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
CMD ["pnpm", "run", "dev"]