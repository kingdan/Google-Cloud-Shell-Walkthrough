const express = require('express')
const app = express()
// const port = 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World from Google'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

module.exports = { app };
