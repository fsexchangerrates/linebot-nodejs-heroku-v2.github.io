const session = require('store2');
const { Line } = require('messaging-api-line');
const flex1 = require('../template/flexes/flex1');
const flex2 = require('../template/flexes/flex2');
const flex3 = require('../template/flexes/flex3');
const flex4 = require('../template/flexes/flex4');
const flex5 = require('../template/flexes/flex5');
const flex6 = require('../template/flexes/flex6');
const flex7 = require('../template/flexes/flex7');


module.exports = {
    getStatus(userId) {
        return session.get(userId);
    },

    mainFlow(client, userId, replyToken, message) {
        const current = session.get(userId);

        switch (current) {
            case null:
                session.set(userId, "start", true);
                return client.replyFlex(replyToken, [Line.createFlex('greeting', flex1.greeting)]);
            case "currency":
                session.set(userId, "paypal" || "webmoney" || "perfectmoney" || "neteller" || "skrill", true);
                console.log("You say: " + message)
                return client.replyFlex(replyToken, [Line.createFlex('currency', flex2.currency)]);
            case "paypal":
                session.set(userId, { action: { matches: /^('buy'|'sell')/i } }, true);
                return client.reply(replyToken, [Line.createFlex('paypal', flex3.paypal)]);
            case "webmoney":
                session.set(userId, { action: { matches: /^('buy'|'sell')/i } }, true);
                client.reply(replyToken, [Line.createFlex('webmoney', flex4.webmoney)]);
        }
    },

    getActionTrigger(client, event) {
        const { message, source } = event;
        const { userId } = source;

    }
};