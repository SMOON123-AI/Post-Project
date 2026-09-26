//Phele backend banao uske baad frontend aur phir integrate
const express = require('express')
const multer = require('multer')
const postModel = require('./models/post.model')
const uploadFile = require('./services/storage.services')
const cors=require('cors')
//We will use multer middleware to read form data
// epxress.json middleware was used to read raw data

const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({storage:multer.memoryStorage()})


app.post('/create-post', upload.single("image"), async (req,res)=>{
  const caption = req.body.caption

  /* console.log(req.file) => ismay joh buffer hai wahi hai apki actual file ki data ab issi buffer ko daalenge imagekit mai aur url nikalenge bcoz db mai kbhi bhi image nhi store krte hai ussay hamesha url store krte hai. Toh image, video yeh sbki url apko milti hai ek clourd storage provider wale se. Toh cloud storage provider kya karta hai ki image ko leke uski url banata haia ur wahi url hum db mai store krte hai aur erxample of cloud stoage provider are dropbox, imagekit, etc.. */

  const result = await uploadFile(req.file.buffer,req.file.originalname)

  const post = await postModel.create({
    image:result.url, 
    caption:caption})

  res.status(201).json({
    message:"Post created successfully",
    post
  })
})


app.get('/feed',async (req,res)=>{
  const posts = await postModel.find()

  res.status(200).json({
    message:"Post fetched successfully",
    posts})
}) 

module.exports = app