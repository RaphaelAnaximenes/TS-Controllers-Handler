import http from 'http';
import { app } from './app';

// Create an HTTP server
const server = http.createServer(app);

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
