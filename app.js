const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', 'views')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.render('404');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})