const  {transporter} = require('./configNodemiler');

    
let info =  transporter.sendMail({
    
    from: 'soporte conectatos app', // sender address
    to: "santiagomoraless2001@gmail.com", // list of receivers
    subject: "welecome to the app test01", // Subject line
    text: "Helle desde controller", // plain text body
    html: "<h1>hello desde controller</h1> <p>prueba01</p>", // html body
})


module.exports = {info}