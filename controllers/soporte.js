const { body } = require('express-validator');
const { sendEmail } = require('../middelwares/email/sendEmail');
const ticket = async(req,res)=>{
    const {info,emailUs,name} = req.body;

  
    const link = 'https://ita-sa.com/'
    sendEmail('vmorales@ita-sa.com','informacion ticked de soporte contactos ITA','Soporte ticked app contactos',info,link,emailUs,name)
    res.json('ticked enviado')
}

module.exports = {ticket}