const Pool = require('pg').Pool;

module.exports.db = new Pool({
    user: 'foodstyles',
    host: 'localhost',
    database: 'fs_api',
    password: '1a3c5x7w',
    port: 5432
});

