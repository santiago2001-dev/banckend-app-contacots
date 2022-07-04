const db = require('../../db/config');


const existeEmail = async(req,res,next)=>{
    const email =  await req.body.email;
    
    let  validation ;  
    const  sql =  `SELECT email FROM contactos WHERE email = '${email}'`;
   
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
        const  sql =  `SELECT email FROM contactos WHERE email = '${email}'`;
       
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

const existeUser = async(req,res,next)=>{
    const {nameuser} = await req.body;
    
    let  validation ;  
        const  sql =  `SELECT nameuser FROM contactos WHERE nameuser = '${nameuser}'`;
       
        db.query(sql,(error,results)=>{
            if(error){
                throw error
            }
            else{
                
            
                results.forEach(element => {
                 validation = element.nameuser
    
               });
            
               if(validation == nameuser){
                return res.status(400).json('este nombre de usuario ya esta registrado');
             }

          else if(validation == undefined){
              next(); 
          }
          
              
            }
          
         }) 
}


const existeNumber = async(req,res,next)=>{
    const {number} = await req.body;
    
    let  validation ;  
        const  sql =  `SELECT number FROM contactos WHERE number = '${number}'`;
       
        db.query(sql,(error,results)=>{
            if(error){
                throw error
            }
            else{
                
            
                results.forEach(element => {
                 validation = element.number 
    
               });
            
               if(validation == number){
                return res.status(400).json('este número de telefono  ya esta registrado');
             }

          else if(validation == undefined){
              next(); 
          }
          
              
            }
          
         }) 
}




module.exports={ existeEmail,existeEmaiTrue,existeUser,existeNumber} 
