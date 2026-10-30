const mongoose = require('mongoose')

async function connectToDatabase(){
    try{
    await mongoose.connect(process.env.DATABASE_URI)
    console.log('Connected to Database')
    }
    catch(err){
        console.log('ERROR: ',err)
    }
}

module.exports = connectToDatabase