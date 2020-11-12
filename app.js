const express = require('express')
const app = express()

app.use('/image', express.static('./images'))

app.use(express.json())

app.use(require('./src/routes/routes'))

const port = 3000

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
    console.log("Press Ctrl + C to quit.");
})
