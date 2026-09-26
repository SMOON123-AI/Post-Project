// We store private keys,mongo db uri, api, etc in env so that no one else could see itTo use private keys from env we use dotenv package

const mongoose = require('mongoose')

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI)

  console.log("Database connected successfully")
}

module.exports = connectDB