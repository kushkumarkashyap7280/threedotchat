FROM nginx:alpine

# Bake the default configuration into the image for production deployments
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 inside the container network
EXPOSE 80