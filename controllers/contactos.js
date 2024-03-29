const conec = require('../db/config');
const {hostImg} = require ('../middelwares/hostingImg');
const  vCard  = require ('vcards-js'); 
const fs = require('fs'), path = require('path')
const { response } = require('express');


const getContacts = async(req,res)=>{
    const sql = `SELECT * FROM contactos`;
    conec.query(sql,(error,results)=>{
        if(error){
            throw  error;
        }else{
            res.json(results)

        }
    })

}


const getBydid = async(req,res)=>{
 
    const {id} = req.params;
    const sql = `SELECT * FROM contactos WHERE id = ${id}`;
    conec.query(sql,(error,results)=>{
        if(error){
            throw  error;
        }else{
         
          
            
            res.json(results)
          


        }
    })
}

  
const getBynameUser = async(req,res)=>{
    const {nameuser} = req.params;
    const sql = `SELECT * FROM contactos WHERE nameuser = '${nameuser}'`;
    conec.query(sql,(error,results)=>{
        if(error){
            throw  error;
        }else{
            res.json(results)

        }
    })
    
}

const search = async(req,res) =>{
    const {busqueda} = req.body
    
    const sql = `SELECT * FROM contactos WHERE  email = '${busqueda}' OR name  = '${busqueda}' OR lastname = '${busqueda}'OR cargo = 
    '${busqueda}' OR area = '${busqueda}' OR proyecto = '${busqueda}' `;
 
     conec.query(sql, (error,rows,fields) => {
  
        if(error){
            throw error;
           
       }else{
           res.json(rows);
           
       }
    }
    )}


const insertContac = async(req,res)=>{
    const {name,lastname,email,nameuser,cargo,area,number,proyecto,img} = req.body;
    const imgHosting = await hostImg(img);
    const sql = `INSERT INTO contactos(name,lastname,email,nameuser,cargo,area,number,proyecto,img) VALUES ('${name}','${lastname}','${email}',
    '${nameuser}','${cargo}','${area}','${number}','${proyecto}','${imgHosting}') `;
     conec.query(sql, (error,rows,fields) => {
  
        if(error){
            throw error;
           
       }else{
           res.json('contacto agregado');
           
       }
    }) 
    
}

const updateContact = async(req,res)=>{
    const {id} = await req.params;
    const {name,lastname,email,nameuser,cargo,area,number,proyecto,img} = req.body;
    
    const imgHosting =  await hostImg(img);
    let sql = `update contactos set name = '${name}',lastname = '${lastname}',nameuser = '${nameuser}',email = '${email}',cargo = '${area}',img = '${imgHosting}',
     cargo = '${cargo}', number = ${number},proyecto = '${proyecto}' where id = '${id}'`;
     conec.query(sql,(error,results)=>{
        if(error){
            throw error
        }else{
            res.json({
                status: 'registro actualizado'
            })
        }
    })

}


const deleteContact = async=(req,res)=>{
    const {id} = req.params;
    const sql = `Delete from contactos where id = '${id}'`
     conec.query(sql,(error,results)=>{
        if(error){
            throw error
        }else{
            res.json({
                status: 'registro eliminado'
            })
        }
    })
}

const generateVcard = async =(req,res)=>{
    const {id} = req.params;
    const axios = require('axios').default;
    const sql = `SELECT * FROM contactos WHERE id = ${id}`;
    conec.query(sql,(error,results)=>{
        if(error){
        throw error
        }else{
            const micard = vCard()
            //convertir a base 64 la imagen para enviarla a el vcard
            axios.get(results[0].img,{responseType : 'arraybuffer'}).then(response =>{
                   const imgbae64 = Buffer.from(response.data,'binary').toString('base64')
            
                micard.firstName = results[0].name;
                micard.lastName = results[0].lastname;
                micard.organization = 'ITA';
                micard.photo.embedFromString(imgbae64,'image/jpeg');
                micard.workPhone = results[0].number;
                micard.title = results[0].cargo;
                micard.workEmail=  results[0].email;
                micard.saveToFile(`./vcards/${results[0].name}-${results[0].lastname}.vcf`);
       //convertir a base 64
             file = fs.readFileSync(`./vcards/${results[0].name}-${results[0].lastname}.vcf`,{encoding : 'base64'});
                
          
             const link = `http://localhost:4200/scan/${results[0].id}`
           
            res.json({
                vcard : file,
                link
                
            }) 
            
        })
        }



     })
 } 

//  getvcard = async (req,res)=>{
//     const  {nameuser}  =  req.params;
//     sql = `SELECT vcard FROM vcard WHERE nameuser = '${nameuser}'`
//     conec.query(sql,(error,rows)=>{
//         if(error){
//             throw error 
//         }else{

//          res.json(rows)
//         }
//     })

//  }

module.exports = {
getContacts,
getBydid,
getBynameUser,
search,
insertContac,
updateContact,
deleteContact,
generateVcard,

}