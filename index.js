const server = require('./server');
const env = require('./.env');
const { config } = require('dotenv/types');
const { path } = require('./server');

server.use(config(data.join(__dirname, "dotenv"), ".env"))

server.listen(3000 || process.env.PORT, () => {
    console.log(`Server is running on localhost:3000`);
});