//importaciones
const {Router} = require('express');
const {check} = require('express-validator');

//modulos propios
const {validarCmapos} = require('../middelwares/validacionesUsers/validaciones-campos');
const {existeEmail,existeNumber,existeUser} = require('../middelwares/validacionesContactos/valicionDB');
const {
getContacts,
getBydid,
getBynameUser,
search,
insertContac,
updateContact,
deleteContact
} = require ('../controllers/contactos')
const router = Router();

router.get('/',getContacts);

router.get('/id/:id',getBydid);

router.get('/:nameuser',getBynameUser);

router.post('/search',search);

router.post('/insert',
check('email','debes proporcionar un correo válido').isEmail(),
check('number','debes proporcionar  numero de celular válido ').isLength({max:10}),
validarCmapos,
existeNumber,
existeUser, 
existeEmail,
insertContac);

router.put('/update',
check('email','debes proporcionar un correo válido').isEmail(),
check('number','debes proporcionar  numero de celular válido ').isLength({max:10}),
updateContact);


router.delete('/delete/:id',deleteContact);


module.exports = router;