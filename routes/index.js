var express = require('express');
var router = express.Router();


const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    //var abc = file.originalname+""+Date();
    cb(null,file.originalname)
  }
})
const upload = multer({ storage: storage,limit:{
    fileSize : 200*1024*1024
  }})

//MONGGOSE

const news = require('../model/news')

/* GET home page. */
router.get('/', function(req, res, next) {
  // news.find().then(data=>{
  //   res.render('index', { title: 'Quan Ly bai viet' ,data:data});
  // });
  res.send('ok')
});
//
// router.post('/createNews',upload.array('img',3),function (req,res){
//   var _title = req.body.title;
//   var _message = req.body.message;
//   var _date =new Date();
//   var link = [];
//   if (req.files){
//     let fileArr = req.files.length;
//     for (let i = 0; i < fileArr; i++) {
//       var _link = req.files[i].path;
//       link.push(_link.toString().slice(6));
//     }
//   }
//
//   console.log(link)
//
//   const tinTuc = new news({
//     title:_title,
//     message:_message,
//     date:_date,
//     link:link
//   })
//   tinTuc.save().then(data=>{
//     if (data!=null){
//       news.find().then(data=>{
//         res.render('index', { title: 'Quan Ly Sach' ,data:data});
//       });
//     }else{
//       news.find().then(data=>{
//         res.render('index', { title: 'Quan Ly Sach' ,data:data});
//       });
//     }
//   })
// })
//
// router.get('/delete/:_id',function (req,res){
//   var _id = req.params._id;
//   //res.send(_id);
//   console.log(_id);
//   news.deleteOne({_id:_id}).then(data=>{
//     if (data!=null){
//       news.find().then(data=>{
//         res.render('index', { title: 'Quan Ly Sach' ,data:data});
//       });
//     }else{
//       news.find().then(data=>{
//         res.render('index', { title: 'Quan Ly Sach' ,data:data});
//       });
//     }
//   })
//
// })
//
// router.post('/filter',function (req,res){
//   var type = req.body.type;
//   var data = [];
//   if (type.toString()==="all"){
//     news.find({}).then(_data=>{
//       res.render('index', { title: 'Quan Ly Sach' ,data:_data});
//     });
//   }else{
//     news.findOne({type:type}).then(_data=>{
//       data.push(_data);
//       res.render('index', { title: 'Quan Ly Sach' ,data:data});
//     });
//   }
// })
//
// router.get('/newsApi',function (req,res) {
//   news.find({}).then(data=>{
//     res.send(data)
//   })
// })
//
// router.post('/update',function (req,res){
//   var _id = req.body._id;
//   var _title = req.body.title;
//   var _message = req.body.message;
//
//
//
//   news.updateOne({_id:_id},{
//     title:_title,
//     message:_message,
//   }).then(data=>{
//     if (data!=null){
//       res.render('index', { title: 'Quan Ly ' ,data:data});
//     }else{
//       res.render('index', { title: 'Quan Ly' ,data:data});
//     }
//   })
// })
//
// //apm
// const apartment = require('../model/apartment')
// router.get('/apartmentApi',function (req, res) {
//   apartment.find({}).then(data=>{
//     res.json(data);
//   });
// })
// router.post('/newsApartment',function (req, res) {
//   var _id = req.body.id;
//   var _area = req.body.area;
//   var _apartment =new apartment({
//     _id:_id,
//     area: _area,
//     status:0
//   })
//   _apartment.save().then(data=>{
//     if (data!=null){
//       apartment.find().then(data=>{
//         res.render('apartment', { title: 'Quản lý căn hộ' ,data:data});
//       });
//     }else{
//       apartment.find().then(data=>{
//         res.render('apartment', { title: 'Quản lý căn hộ' ,data:data});
//       });
//     }
//   })
// })
// //users
// const user = require('../model/users')
// const bcrypt = require('bcrypt');
// var jwt = require('jsonwebtoken');
//
//
// router.get('/usersApi', function(req, res, next) {
//   user.find({}).then(data=>{
//     res.json(data);
//   })
// });
//
// router.post('/insertUsers',async function (req,res) {
//   var pass = '123456'
//   let passW = await bcrypt.hash(pass, 8)
//   let ser = new user({
//     _id:req.body.gmail,
//     name : req.body.fullName,
//     age : req.body.age,
//     address : req.body.address,
//     phone : req.body.phone,
//     sex : req.body.sex,
//     identifier : req.body.identifier,
//     career : req.body.career,
//     gmail : req.body.gmail,
//     passWord : passW,
//   })
//   ser.save().then(data=>{
//     if (data!=null){
//       user.find().then(data=>{
//         res.render('users', { title: 'Quan Ly users' ,data:data});
//       });
//     }else{
//       user.find().then(data=>{
//         res.render('users', { title: 'Quan Ly users' ,data:data});
//       });
//     }
//   })
// })
// router.post('/loginUsers',function (req,res) {
//
//   user.findOne({_id:req.body.gmail}).then(_data=>{
//     if (_data){
//       bcrypt.compare(req.body.passWord,_data.passWord,function (err,result) {
//         if (err){
//           throw res.json({
//             message:err
//           })
//         }
//         if(result){
//           let token = jwt.sign({name:_data},'verySecretCalue',{expiresIn:'1h'})
//           res.json({
//             message:"Success",
//             token
//           })
//         }else{
//           res.json({
//             message:"Faild"
//           })
//         }
//       })
//     }else{
//       res.json({
//             message: "No Data"
//           }
//       )
//     }
//
//   });
// })

module.exports = router;
