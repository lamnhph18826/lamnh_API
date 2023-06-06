const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://admin:lamnhph18826@cluster0.tdhtc06.mongodb.net/news').then(data=>{
    if (data!=null){
        console.log("connect news success :'>")
    }
});


const {Schema} = mongoose;
const News = new Schema({
    id : String,
    title : String,
    message : String,
    date:Date,
    link :Object
})
const news = mongoose.model('news',News);
module.exports = news