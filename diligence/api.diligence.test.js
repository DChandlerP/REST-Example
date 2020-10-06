const { runApiDiligence } = require('api-diligence');
const { appFactory } = require('for-io-runtime');
const appSetup = require('../app.setup.js');

runApiDiligence({
    testsRoot: __dirname,
    test: {
        opts: { appSetup, appFactory }
    },
    config: {},
});
