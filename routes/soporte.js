const {Router} = require('express');
const {check} = require('express-validator');
const {ticket}=require('../controllers/soporte')
const router = Router();
router.post('/',ticket);
module.exports = router;