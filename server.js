// modules
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()


// application configuration
const PORT = process.env.PORT || 4000
const app = express()

// middlewares
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// database connection
const database_connection = () => {
    mongoose.connect(process.env.ATLAS_URI)
        .then(() => console.log('ATLAS CLUSTER is connected.'))
        .catch((err) => console.error(err))
    const db = mongoose.connection
    db.once('open', () => {
        console.log('ATLAS Database connected.')
    })
}


// serve at port 4000
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT} 🚀`)
})