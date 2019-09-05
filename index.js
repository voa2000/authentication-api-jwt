const express = require('express')
const app = express()
const PORT = 3000

//Import auth routes
const authRoute = require('./routes/auth')


app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`) 
})


// Routes Middleware
app.use('/api/user', authRoute)
