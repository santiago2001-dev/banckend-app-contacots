//importaciones
const {Router} = require('express');
const {check} = require('express-validator');

//metodos propios
const {auth,test} =  require('../controllers/login')
const {validarCmapos} =  require ('../middelwares/validaciones-campos');

const router = Router();



router.post('/',
check('email','El correo electronico tiene que ser valido').isEmail(),
validarCmapos,
auth
);


router.post('/test',test)

 module.exports =  router; 