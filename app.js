const express = require("express")
const app = express()
const dotenv = require("dotenv")

dotenv.config()
// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static("dist"))

app.get('/health', (req, res) => {
  res.send('ok')
})


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})