//We are creating this services folder bcoz market mai bahot saare cloud storage provider hai ab joh mujhe kam paiso mai acchi service provide kre mai ussi ko use kronga toh woh change hoti rhegi toh isliye joh bhi cloud storage provider use kroge uska ka code yaha pe likhonga jb service change kronga toh sirf issi folder ko change kronga. Abhi hamara maksad hai image ko leke usko store krke uski url leke usko apne db mai store krna

const ImageKit = require('@imagekit/nodejs')

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadFile(buffer,fileName) {

  const result = await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName
  })

  return result;
}

module.exports = uploadFile;