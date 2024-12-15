// config.js
const config = {
    "clientId": "1072662115353-qcn0bqo6l8r2r7qv0a9iqhdt0jmhqj5g.apps.googleusercontent.com",
    "clientSecret": "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",
    "apiKey": "AIzaSyBOukcVnqFX_ZYRfOfnbVr5V7QqLtg9Hn0"
};

// Support both module and direct script loading
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else if (typeof exports !== 'undefined') {
    exports.default = config;
} else if (typeof window !== 'undefined') {
    window.APP_CONFIG = config;
} else {
    globalThis.APP_CONFIG = config;
}
