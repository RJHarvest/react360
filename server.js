const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'build')))
app.use('/static_assets', express.static(path.join(__dirname, 'static_assets')))

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
