const express = require('express');
const { Line, LineClient } = require('messaging-api-line');
const verifyMiddleware = require('./middleware/verify');

const client = LineClient.connect(
    process.env.ACCESS_TOKEN,
    process.env.CHANNEL_SECRET
)