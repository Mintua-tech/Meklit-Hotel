const mongoose = require('mongoose');
const dotenv =require('dotenv').config();


mongoose.connect(process.env.mongourl)

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('monodb connetion failed')
})

connection.on('connected', ()=>{
    console.log('monodb connetion successfull')
})

require('./models/rooms');

module.exports = mongoose

