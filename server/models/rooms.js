const mongoose = require('mongoose')

const roomschema = mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    maxcount : {
        type: Number,
        required: true
    },
    phonenumber : {
        type: Number,
        required: true
    },
    rentperday : {
        type: Number,
        required: true
    },
    imageurls : [],
    currentbookings : [],
    type : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
      },
} , {
    timestamps : true,
})

const roomModel = mongoose.model('Hotelrooms' , roomschema)

/*async function  insertDymmyCategoryData(){
    try {
        await roomModel.insertMany([
    {
        "name": "spot on 37669 hotel",
        "maxcount": "3",
        "phonenumber": "9989649278",
        "rentperday": "1500",
        "imageurls" : [
            "https://images.app.goo.gl/xi4PiC1rcHUV5du98",
            "https://images.app.goo.gl/gSGMNLrjtvvcQJhr8",
            "https://images.app.goo.gl/UWGCu6mz5VVxRuQ76"],
        "currentbookings" : "[]",
        "type": "Delux",
        "description": "hotel shiva sai lodge is a furnished and modest place for you fabilous stay  "

    },
    {
        "name": "OYO Flagship 75243 Metro International",
        "maxcount": "3",
        "phonenumber": "9989649278",
        "rentperday": "2000",
        "imageurls" : [
            "https://images.app.goo.gl/ZSpw11gio4bgJiS2A",
            "https://images.app.goo.gl/5jJz31ry7fRmiRXf6",
            "https://images.app.goo.gl/YprnpULd6heoTfiC6"],
        "currentbookings" : "[]",
        "type": "Non-Delux",
        "description": "hotel shiva sai lodge is a furnished and modest place for you fabilous stay  "
    },
    
]);
    } catch (error) {
       console.log('err', + error)
    }
}

insertDymmyCategoryData();*/


module.exports = roomModel