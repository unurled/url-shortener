const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080
   // Listen for incoming requests
app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`))