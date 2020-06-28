function makeText(text) {
    return {
        type: 'text',
        text: text
    };;
}

module.exports = {
    greeting: makeText('greeting')
};