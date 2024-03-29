const conec = require('../db/config');

const {encript} = require('../middelwares/ecriptPass')
const {hostImg} = require ('../middelwares/hostingImg');

const getUsers = async(req,res)=>{
 const sql = 'SELECT * FROM users';
    conec.query(sql,(error,results)=>{
        if(error){
            throw  error;
        }else{
            res.json(results)

        }
    })
}

const getUsersByid = async (req,res)=>{

    const {id} = await req.params;
    const sql = `SELECT * fROM users where id = '${id}'`;
    await conec.query(sql,(error,results)=>{
        if(error){
            throw error;

        }else{

            res.json(results);
            
          

        }

    });


}




//nav bar
const search = async(req,res) =>{
    const {busqueda} = req.body
    
    const sql = `SELECT * FROM users WHERE  email = '${busqueda}' OR name  = '${busqueda}' OR lastname = '${busqueda}'OR role = '${busqueda}}' `
 
    await conec.query(sql, (error,rows,fields) => {
  
        if(error){
            throw error;
           
       }else{
           res.json(rows);
           
       }
    }
    )}

const insertUsers = async(req,res)=>{
    const {name,lastname,password,email,role,img} = await req.body;

    const imgHosting = await hostImg(img); 
    const hash =  await encript(password)
    const sql = `INSERT INTO users (name,lastname,email,password,role,img) values ('${name}', '${lastname}','${email}','${hash}','${role}','${imgHosting}')`
     conec.query(sql,(error,results)=>{
        if(error){
            throw error; 

        }else{

            res.json('susuario agregar de forma correcta');
            
          

        }

    });

  

}
const updateuser = async(req,res)=>{
    const {id} = await req.params;
    const {name,lastname,password,email,role,img} = await req.body;
    const hash = await encript(password);
    const imgHosting =  await hostImg(img);
    let sql = `update users set name = '${name}',lastname = '${lastname}',password = '${hash}',email = '${email}',role = '${role}',img = '${imgHosting}'
    where id = '${id}'`;
    await conec.query(sql,(error,results)=>{
        if(error){
            throw error
        }else{
            res.json({
                status: 'registro actualizado'
            })
        }
    })

}


const deleteUser = async(req,res)=>{
    const {id} =  await req.params;
    let sql = `DELETE FROM users where id = '${id}'`;
    await conec.query(sql,(error,results)=>{
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
    getUsers,
    getUsersByid,
    insertUsers,
    updateuser,
    deleteUser,
    search
}