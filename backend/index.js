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

//login
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const {User} = require("./models/User");

app.post('/api/users/register', (req, res) => {

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

//URL 연결
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})