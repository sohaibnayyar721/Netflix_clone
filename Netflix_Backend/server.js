const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./Routes/route')
const dotenv = require('dotenv').config()
const app = express()
const port = 5000
app.use(cors())
app.use(express.json())
const connectdb = async () => {
  try {
    await mongoose.connect(process.env.URL)
    
    console.log("MongoDb Connect successfully")
  }
  catch {
    console.log("MongoDb connection failed")
  }
}
connectdb()

app.use('/api', router);

app.get('/',(req,res)=>{
  res.send("<h1>Working</h1>")
})
app.listen(process.env.PORT || port, () => console.log(`Server is running on port: ${process.env.PORT}`))