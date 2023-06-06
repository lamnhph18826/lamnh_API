const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://admin:lamnhph18826@cluster0.tdhtc06.mongodb.net/news').then(data=>{
    if (data!=null){
        console.log("connect apartment success :'>")
    }
});
const {Schema} = mongoose;
const Apartment = new Schema({
    _id : String,
    area : String,
    status : String,
})
const apartment = mongoose.model('apartment',Apartment);
module.exports = apartment