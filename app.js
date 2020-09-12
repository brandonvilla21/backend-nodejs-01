const express = require('express')
const { devolverSaludo, returnRockets, renderViewRockets } = require('./src/controller')

const app = express()

app.get('/saludo', devolverSaludo)

// API
// app.js => controller => model => controller
app.get('/api/rockets', returnRockets)

// Templates
// app.js => controller
app.get('/rockets', renderViewRockets)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})