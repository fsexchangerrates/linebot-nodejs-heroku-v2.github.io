const { Line } = require('messaging-api-line');
const flow = require('../dialog/basic');

/*
{
    "events": [
      {
        "type": "message",
        "replyToken": "9e5a566f628443dbabb7fdd4cf89c3b5",
        "source": {
          "userId": "Ucd21733a3fc45798492dddd289fdf174",
          "type": "user"
        },
        "timestamp": 1590648229451,
        "mode": "active",
        "message": {
          "type": "text",
          "id": "12043680518812",
          "text": "nextmenu"
        }
      }
    ],
    "destination": "U627409f8ca632dca407a2e5bad1f4f0b"
  }
*/

const messageHandler = (client, event) => {
    const { replyToken, message, source } = event;

    const userId = source.userId;
    console.log("userId", userId);

    const messageType = message.type;
    const messageText = message.text;

    if (messageType === 'text') {
        return flow.mainFlow(client, userId, replyToken, messageText);
    } else {
        return client.reply(replyToken, [
            Line.createCarouselTemplate('image carousel template', '3', [
                Line.createImage('https://')
            ])
        ]);
    }
};

module.exports = messageHandler;