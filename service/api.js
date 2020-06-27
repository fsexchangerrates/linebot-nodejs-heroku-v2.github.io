const axios = require('axios');
const base_url = process.env.BASE_URL;

module.exports = axios.create({
    baseUrl: base_url,
    timeout: 5000
});