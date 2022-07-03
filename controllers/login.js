

//llamado de jsonwebtoken
const jwt =  require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const conec = require('../db/config');


const { sendEmail } = require('../middelwares/email/sendEmail');
//autentication
const auth = async(req,res)=>{ 
        const {email,password} = await req.body;
        
        let pas;  

        const sql =`SELECT password FROM users WHERE email = '${email}' `;
         
        if(email  == undefined){
            res.json({ error :  'email or password not found'})
        }  
        else{    

            conec.query(sql,(error,results)=>{
                if(error){
                    res.json({error })
                }
                else{
                   results.forEach(element => {
                      pas = element.password;
                     });

                   const compare = bcrypt.compareSync(password,pas);
                    
                     if(!compare){
                         res.json({error : 'user not exist'});
                     }
                     else{
                        if(results.length >0){
                            let data = JSON.stringify(results[0]);
                            const token = jwt.sign(data,'stil')
                            res.json({token})
                            console.log("loggeado")
                        }else{
                            
                            res.json('usuario incorrecto')
                        }
                         
                     }
               
                } 

        })}

 

}



const test = (req,res,next) =>{
   
    if(!req.headers.authorization) return res.status(401).json('no autorizado');

    const token = req.headers.authorization.substr(7)
    console.log(token)
    if(token!==''){
        const content  = jwt.verify(token,'stil');
        req.data = content;
        next();
    }else{
     res.status(401).json('token vacio')
    }

res.json('infromacion secreta')


}


const RestorePassword = async(req,res)=>{
    link = 'https://www.google.com/'
    const  email = req.body.email;
    sendEmail(email,'información de tu cuenta de contactos  ITA','REESTABLECIMIENTO DE CONTRASEÑA','Hemos recibido tú solicitud para reestablecer tu contraseña por favor ingresa a este vinculo para poder reestablecerla ',link)
    res.json('correo enviado')
         
    }
    // if(existeEmailRestPas(email) == true){
    //      sendEmail(email,'hola desde metodo02','prueba01','pene')
    // }
    // else{
    //     return 'error'
    // }

    
   



module.exports = {
  
    auth,
    test,
    RestorePassword
    
}