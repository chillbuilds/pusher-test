const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/service-worker.js'))
  })

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
