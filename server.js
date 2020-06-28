const express = require('express');
const { Line, LineClient } = require('messaging-api-line');
const verifyMiddleware = require('./middleware/verify');
const postbackHandler = require('./handler/postback');
const followHandler = require('./handler/follow');
const messageHandler = require('./handler/message');
const flex1 = require('./template/flexes/flex1');

const client = LineClient.connect(
    process.env.ACCESS_TOKEN,
    process.env.CHANNEL_SECRET
);

const server = express();

const FLEX_GREETING_MESSAGE = flex1.greeting;

const config = {
    channelSecret: process.env.CHANNEL_SECRET
};

const verifyEvents = [
    '00000000000000000000000000000000',
    'ffffffffffffffffffffffffffffffff',
];

const handleEvent = event => {
    const { type, replyToken, message } = event;

    const messageType = message.type;
    if (type === 'message' && messageType === 'text') {
        return messageHandler(client, event);
    } else if (type === 'follow') {
        return followHandler(client, event);
    } else if (type === 'postback') {
        return postbackHandler(client, event);
    } else if (type !== 'message' && type !== 'follow' && type !== 'postback') {
        return Promise.resolve(null);
    }

    if (verifyEvents.includes(replyToken)) return Promise.resolve(null);
    return client.reply(replyToken, [
        Line.createText("start"),
        Line.createFlex('greeting', flex1.greeting)
    ]);
};

server.post('/webhook', verifyMiddleware(config), (req, res) => {
    const { body } = req;
    const { events } = body;

    Promise.all(events.map(handleEvent))
        .then(result => res.status(200).send(result))
        .catch(err => console.log(err));
});

module.exports = server;