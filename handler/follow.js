const { Line } = require('messaging-api-line');
const util = require('util');
const greeting = require('template/flexes/flex1');

function handle(client, event) {
    const { replyToken, source } = event;

    const userId = source.userId;

    client.getUserProfile(userId).then((profile) => {
        console.log('profile', profile);

        const { displayNane } = profile;
        const message = util.format("Hello %s, Thank you to follow us ^^ Can I help you? ", displayNane);

        return client.reply(replyToken, [
            Line.createText({
                type: 'text',
                text: message
            }),
            Line.createFlex('greeting', greeting)
        ]);
    })
}

module.exports = handle;