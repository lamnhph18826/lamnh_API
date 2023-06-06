// var express = require('express');
// var router = express.Router();
// // const user = require('../model/users')
// // const bcrypt = require('bcrypt');
// // var jwt = require('jsonwebtoken');
// //
// // /* GET users listing. */
// // router.get('/', function(req, res, next) {
// //     user.find({}).then(data=>{
// //         res.json(data);
// //     })
// // });
// //
// // router.get('/usersApi', function(req, res, next) {
// //     user.find({}).then(data=>{
// //         res.json(data);
// //     })
// // });
// //
// // router.post('/insertUsers',async function (req,res) {
// //     var pass = '123456'
// //     let passW = await bcrypt.hash(pass, 8)
// //     let ser = new user({
// //         _id:req.body.gmail,
// //         name : req.body.fullName,
// //         age : req.body.age,
// //         address : req.body.address,
// //         phone : req.body.phone,
// //         sex : req.body.sex,
// //         identifier : req.body.identifier,
// //         career : req.body.career,
// //         gmail : req.body.gmail,
// //         passWord : passW,
// //     })
// //     ser.save().then(data=>{
// //         if (data!=null){
// //             user.find().then(data=>{
// //                 res.render('users', { title: 'Quan Ly users' ,data:data});
// //             });
// //         }else{
// //             user.find().then(data=>{
// //                 res.render('users', { title: 'Quan Ly users' ,data:data});
// //             });
// //         }
// //     })
// // })
// // router.post('/loginUsers',function (req,res) {
// //
// //     user.findOne({_id:req.body.gmail}).then(_data=>{
// //         if (_data){
// //             bcrypt.compare(req.body.passWord,_data.passWord,function (err,result) {
// //                 if (err){
// //                     throw res.json({
// //                         message:err
// //                     })
// //                 }
// //                 if(result){
// //                     let token = jwt.sign({name:_data},'verySecretCalue',{expiresIn:'1h'})
// //                     res.json({
// //                         message:"Success",
// //                         token
// //                     })
// //                 }else{
// //                     res.json({
// //                         message:"Faild"
// //                     })
// //                 }
// //             })
// //         }else{
// //             res.json({
// //                     message: "No Data"
// //                 }
// //             )
// //         }
// //
// //     });
// // })
// module.exports = router;
