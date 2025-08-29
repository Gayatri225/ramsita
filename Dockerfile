# Optional: serve the static site with Nginx
FROM nginx:alpine
COPY . /usr/share/nginx/html
# Nginx already serves on port 80
