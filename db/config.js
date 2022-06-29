const sql =  require('mysql');

const conexion = sql.createConnection({
    host : process.env.HOST_DB,
    password : process.env.PASS_DB,
    port : process.env.PORT_DB,
    database : process.env.NAME_DB,
    user : process.env.USER_DB
});


conexion.connect((err)=>{
    if(err){
        console.log(`error in db : ${err}`);

    }else{
        console.log('enable connection!!')

    }


});



module.exports =  conexion;