const {validationResult} = require('express-validator');
const validarCmapos= (req,res,next)=>{
    const existeError = validationResult(req);
    if(!existeError.isEmpty()){
        return res.status(400).json(existeError);
    }

    next();


}


module.exports= {validarCmapos}