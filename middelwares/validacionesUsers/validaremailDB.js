const db = require('../../db/config');


const existeEmail = async(req,res,next)=>{
    const email =  await req.body.email;
    
    let  validation ;  
    const  sql =  `SELECT email FROM users WHERE email = '${email}'`;
   
     db.query(sql,(error,results)=>{
        if(error){
            throw error
        }
        else{
             
         
            results.forEach(element => {
             validation = element.email

           });
        }
             if(validation == email){
                return res.status(400).json('correo ya esta registrado');
             }

          else if(validation == undefined){
              next(); 
          }


       
      
     }) 



     
}


const existeEmaiTrue = async(req,res,next)=>{
    const {email} = await req.body;
    
    let  validation ;  
        const  sql =  `SELECT email FROM users WHERE email = '${email}'`;
       
        db.query(sql,(error,results)=>{
            if(error){
                throw error
            }
            else{
                
            
                results.forEach(element => {
                 validation = element.email
    
               });
            
                 if(validation !== email){ 
                    return res.status(400).json('usuario no esta registrado');
                    

                 }else{
                    next();
                 }
          
              
            }
          
         }) 
}




module.exports={ existeEmail,existeEmaiTrue} 
