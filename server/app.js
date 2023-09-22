const express = require('express')
const bodyParser=require('body-parser')
const mongoose = require('mongoose')
 const cors=require('cors')
const url = 'mongodb+srv://chandrareddycheruku76768:ZvFIExZZ6I1he2Pq@cluster0.ap6xzui.mongodb.net/?retryWrites=true&w=majority/c3'
const app = express()
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () =>
{
console.log('connected...')
})
 app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)
app.listen(8001, () =>
{
console.log('Server started')
})