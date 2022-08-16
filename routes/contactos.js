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
deleteContact,
generateVcard,
getvcard
} = require ('../controllers/contactos')
const router = Router();

router.get('/',getContacts);

router.get('/:id',getBydid);


  
router.post('/search',search); 

router.post('/insert',
check('email','debes proporcionar un correo válido').isEmail(),
check('number','debes proporcionar  numero de celular válido ').isLength({max:10}),
validarCmapos,
existeNumber,
existeUser, 
existeEmail,
insertContac);

router.put('/update/:id',
check('email','debes proporcionar un correo válido').isEmail(),
check('number','debes proporcionar  numero de celular válido ').isLength({max:10}),
updateContact);


router.delete('/delete/:id',deleteContact);
router.get('/vcards/:id',generateVcard);
router.get('/getvcards/:nameuser',getvcard);

module.exports = router; 