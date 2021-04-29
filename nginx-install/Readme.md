# Build Instructions
1. cp static site build director to local build directory.
2. run docker build -t <site name>-nginx .
3. docker run -d -p 8080:80 -- restart always <site name>-nginx