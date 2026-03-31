# Use NGINX
FROM nginx:alpine

# Remove default files
RUN rm -rf /usr/share/nginx/html/*

# Copy static files
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
