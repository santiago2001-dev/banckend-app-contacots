//importaciones
const {Router} = require('express');
const {check} = require('express-validator');

//metodos propios
const {auth,test,RestorePassword} =  require('../controllers/login')
const {validarCmapos} =  require ('../middelwares/validacionesUsers/validaciones-campos');
const {existeEmaiTrue} = require('../middelwares/validacionesUsers/validaremailDB')

const router = Router();



router.post('/',
check('email','El correo electronico tiene que ser valido').isEmail(),
existeEmaiTrue,
validarCmapos,
auth
);


router.post('/test',test)

router.post('/restore',
check('email','El correo electronico tiene que ser valido').isEmail(),
existeEmaiTrue,
validarCmapos,
RestorePassword)

 module.exports =  router; 