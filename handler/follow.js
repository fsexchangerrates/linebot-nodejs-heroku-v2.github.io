const { Line } = require('messaging-api-line');
const util = require('util');
const flex1 = require('../template/flexes/flex1');

module.exports = (client, event) => {
    const { replyToken, source } = event;

    const userId = source.userId;

    client.getUserProfile(userId).then(profile => {
        console.log("profile", profile);

        const { displayNane } = profile;
        const text = util.format("Hello %s, Thank you to follow us ^^ Your name is: ", displayNane);

        return client.reply(replyToken, [
            Line.createText(text),
            Line.createFlex('greeting', flex1.greeting)
        ]);
    })
};