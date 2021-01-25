const express = require('express');
const fs = require('fs');
const cors = require('cors')
var routerData = require('./Routeres/routerData')
var Mailrouter = require('./Routeres/MailRouter')
const app = express();
const { json } = require('express');
app.use(express.json());
app.use(cors())


const port = 5000;

app.use('/',routerData)
app.use('/sendMail',Mailrouter)
app.listen(port, () => {
    console.log(`listen on port ${port}`);
})