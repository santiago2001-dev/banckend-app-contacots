

//llamado de jsonwebtoken
const jwt =  require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const conec = require('../db/config');


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


module.exports = {
  
    auth,
    test
    
}