const express = require('express');
const app = express()

const port = 14045


 app.set('view engine', 'ejs')
 app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
 app.use(express.static('public'))
 const routeHome = require('./router/home')

app.use([routeHome])

app.listen(port, () => {
    console.log(`Apps running on port ${port}`)
})