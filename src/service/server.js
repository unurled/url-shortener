require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT
   // Listen for incoming requests
app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`))