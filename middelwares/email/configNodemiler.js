const nodemailer = require('nodemailer');
 // create reusable transporter object using the default SMTP transport
 
 const  transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.userGoogle, // generated ethereal user
    pass: process.env.passGoogle // generated ethereal password
  },
}); 
transporter.verify().then(()=>{
    console.log("ready for send email");
})

//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
  




  module.exports = {transporter}