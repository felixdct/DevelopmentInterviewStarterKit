require('dotenv').config({path: 'config/.env'});
const Server = require('./services/server');

const server = new Server();

server.listen();
