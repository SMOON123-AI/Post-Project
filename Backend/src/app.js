const express = require('express')
const multer = require('multer')
const postModel = require('./models/post.model')
const uploadFile = require('./services/storage.services')
const cors=require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({storage:multer.memoryStorage()})


app.post('/create-post', upload.single("image"), async (req,res)=>{
  const caption = req.body.caption

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
