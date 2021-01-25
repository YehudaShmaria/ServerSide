var express = require("express"); 
smtpTransport = require('nodemailer-smtp-transport');
Mailrouter = express.Router();
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport(smtpTransport({    
     service: 'gmail',
     host: 'smtp.gmail.com', 
     auth: {        
          user: 'yehudas1999@gmail.com',        
          pass: '207193780'    
     }
}));
Mailrouter.post("/", function(req,res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    var Name =  req.body.Name;
    var Mail = req.body.Mail;
    var Body = req.body.Body;
     const mailOptions = {
          from: `${Mail}`,
          to: 'yehudas1999@gmail.com',                  
          subject: `Mail From ${Name} In Test Drive`,         
          html: `The Mail: ${Mail}' and The Body: ${Body} `    
          };
    transporter.sendMail(mailOptions, function(error, info){
          if (error) {
              console.log(error);  
           }else{     
              console.log('Email sent: ' + info.response);  
          }   
     });
});
module.exports = Mailrouter;