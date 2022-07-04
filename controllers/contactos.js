const conec = require('../db/config');
const {hostImg} = require ('../middelwares/hostingImg');

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
    const sql = `Delete from contact where id = '${id}'`
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


module.exports = {
getContacts,
getBydid,
getBynameUser,
search,
insertContac,
updateContact,
deleteContact
}