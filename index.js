const express = require('express')
const config = require('./config/config')

const app = express()

require('./config/database')().then(() => {
    app.use(express.json())
    require('./config/express')(app)
    require('./config/routes')(app)

    app.listen(
        config.port,
        console.log(
            `Server is up and running on port ${config.port}`
        )
    )
})
