var express = require('express')
var TeachrModel = require('../Data/TeacherData');
var routerData = express.Router()

routerData.get('',(req,res)=>{
    TeachrModel.GetAllTeacher(function(result){
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.json(result)
        })
})

routerData.get('/getOne/:Phone',(req,res)=>{
    var Phone = req.params.Phone;
    console.log(Phone)
    TeachrModel.GetOneTeacher(function(result,Phone){
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.json(result)
    })
})

routerData.post('/insert',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log('Hi');
    var Teacher = req.body;
    TeachrModel.insertTeacher(Teacher)
    res.send('Insert')
})

routerData.patch('/updateTeacher/:phoneNumber/:comment',(req,res)=>{
    var pn = req.params.phoneNumber;
    var comment = req.params.comment;
    TeachrModel.updateTeacher(pn,comment);
    console.log('Update')
})

module.exports = routerData