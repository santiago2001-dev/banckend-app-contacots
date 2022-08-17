const {Router} = require('express');
const router = Router();
const {getAll,getbyID,insertLink,updateLink, deleteLink} = require('../controllers/enlaces')
router.get('/',getAll);
router.get('/:id',getbyID)
router.post('/insert',insertLink);
router.put('/update/:id',updateLink);
router.delete('/delete/:id',deleteLink);
module.exports = router