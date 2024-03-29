//importaciones
const {Router} = require('express');
const {check} = require('express-validator');

//modulos propios
const {validarCmapos} = require('../middelwares/validacionesUsers/validaciones-campos')
const {existeEmail} = require('../middelwares/validacionesUsers/validaremailDB')

const {
getUsers,
getUsersByid,
insertUsers, 
updateuser,
deleteUser,
search
} = require('../controllers/users')

const router = Router();

router.get('/' ,getUsers);
router.get('/:id',getUsersByid);
router.post('/search',search)

router.post('/register',
check('email','debe proporcionarse un email valido').isEmail(), 
check('password','la contraseña debe tener minimo 8 caracteres').isLength({min:8}),
existeEmail,
validarCmapos,
insertUsers);



router.put('/update/:id',
check('email','debe proporcionarse un email valido').isEmail(), 
check('password','la contraseña debe tener minimo 8 caracteres').isLength({min:8}),
validarCmapos,
updateuser);

 
router.delete('/delete/:id',deleteUser);

module.exports = router;   