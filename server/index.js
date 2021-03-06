const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./routes/auth.routes')
const cors = require('./middleware/cors.middleware')

const app = express()
const PORT = process.env.PORT || config.get('serverPort')


app.use(cors)
app.use(express.json())
app.use('/api/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

        app.listen(PORT, () => {
            console.log('The server was started on port ', PORT)
        })

    } catch (e) {
        console.log(e)
    }
}

start()