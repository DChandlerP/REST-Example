const moduleNames = require('./modules');

module.exports = {
    moduleNames,
    dir: __dirname,
    config: { DB_TYPE: 'mongodb' },
};
