//mongo DB 연결
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://CPadmin:pueCN!M2MW_tNub@cluster0.7z0yn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

//express 연결
const express = require('express')
const app = express()
const port = 3000

//URL 연결
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})