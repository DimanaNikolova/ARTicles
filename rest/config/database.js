const mongoose = require('mongoose');
const config = require('./config');
const dbName = 'articles';

module.exports = () => {
    return mongoose
        .connect(config.dbURL,
            { useNewUrlParser: true, useUnifiedTopology: true },
            console.log('Database is ready! \n Server is up!')

        )
}