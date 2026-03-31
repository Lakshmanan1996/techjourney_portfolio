# =========================================================
#  Static files like HTML, Angular, CSS front end
# =========================================================
# Build stage
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Runtime stage - Nginx
FROM nginx:alpine

COPY --from=build /app/dist/web-application /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
