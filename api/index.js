const express = require('express')
const app = express()

app.get("/test", (req, res) => {
  res.send({message: "Test API Endpoint"})
})


module.exports = {
  path: '/api',
  handler: app
}


