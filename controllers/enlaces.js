const conec = require('../db/config');
const {hostImg} = require ('../middelwares/hostingImg');
const getAll =  async (req,res)=>{
sql = 'SELECT * FROM enlaces'
conec.query(sql,(error,rows)=>{
    if(error){
        throw error

    }else{

        res.json(rows)
    }
})
}

const getbyID =  async(req,res)=>{
const {id}= req.params;
sql = `SELECT * FROM enlaces WHERE id = '${id}'`
conec.query(sql,(error,rows)=>{
    if(error){
        throw error

    }else{

        res.json(rows)
    }
})

}

const insertLink = async (req,res)=>{
 
        const {nombre,enlace,img} = req.body;
        const imgHosting =  await hostImg(img);
        let sql = `INSERT INTO enlaces (nombre,enlace,img) VALUES ('${nombre}','${enlace}','${imgHosting}')`;
        conec.query(sql,(error,rows)=>{
            if(error){
                throw error
            }else{
    
                res.json({
                    status: 'registro insertado'
                })
            }
        })
    
    }


const updateLink = async (req,res)=>{
const {id} = req.params;
    const {nombre,enlace,img} = req.body;
    const imgHosting =  await hostImg(img);
    let sql = `UPDATE enlaces SET  nombre = '${nombre}',enlace ='${enlace}',img = '${imgHosting}' WHERE id = '${id}'`;
    conec.query(sql,(error,rows)=>{
        if(error){
            throw error
        }else{

            res.json({
                status: 'registro actualizado'
            })
        }
    })

}



const deleteLink = async=(req,res)=>{
    const {id} = req.params;
    const sql = `Delete from enlaces where id = '${id}'`
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

module.exports = { getAll,updateLink,insertLink,deleteLink,getbyID}