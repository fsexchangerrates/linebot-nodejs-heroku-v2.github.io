const session = require('store2');

module.exports = {
    getStatus(userId) {
        return session.get(userId);
    },

    mainFlow(client, userId, replyToken, message) {
        session.set(userId);
    },

    getReplyToken(replyToken) {
        return session.get(replyToken);
    },


};