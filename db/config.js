const sql =  require('mysql');

const conexion = sql.createConnection({
    host : 'localhost',
    password : 'root',
    port : '3308',
    database : 'contactos',
    user : 'root'
});
  

conexion.connect((err)=>{
    if(err){
        console.log(`error in db : ${err}`);

    }else{
        console.log('enable connection!!')

    }


});



module.exports =  conexion;