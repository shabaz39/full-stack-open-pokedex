const express = require('express')
const mongoose = require('mongoose')
const app = express()

// MongoDB connection URI from environment variable
const MONGODB_URI = process.env.MONGODB_URI

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB')
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error)
  process.exit(1) // Exit the application if unable to connect to MongoDB
})

// Define MongoDB schema and models as needed
// Example:
// const User = mongoose.model('User', { name: String });

// Serve static files from 'dist' directory
app.use(express.static('dist'))

// Example API endpoint
app.get('/version', (req, res) => {
  res.send('1') // Change this string to ensure a new version is deployed
})

// Start the Express server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
