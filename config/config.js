// const env = process.env.NODE_ENV || "development";

// const config = {
//     development: {
//         port: process.env.PORT || 9999,
//         dbURL: "mongodb://localhost:27017/",
//         // dbURL: 'mongodb+srv://dimana:dimana@signupapp.lrmp7.mongodb.net/SignUpApp?retryWrites=true&w=majority',
//         cookie: "x-auth-token"
//     },
//     production: {}
// };

// module.exports = config[env];

const config = {
    development: {
        PORT: 9999,
        dbURL: "mongodb://localhost:27017/",
        cookie: "x-auth-token"
    },
    production: {
        PORT: process.env.PORT,
        dbURL: "mongodb://localhost:27017/",
        cookie: "x-auth-token"
    },
};

module.exports = config[process.env.NODE_ENV.trim()];