const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://aircnc:air123@ds229068.mlab.com:29068/aircnc',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// GET POST PUT DELETE

// req.query to acess query params (filtering)
// req.params to acess route parms (editing, delete)
// req.body acess requisition body (creating, editing)

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(3333)
