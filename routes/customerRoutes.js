const {Router} = require('express')
const {getALLcust, addcust, getCustById, updateCust, deleteCust} = require('../controllers/customercontroller')
const router = Router()

router.get('/',getALLcust);
router.get('/:id',getCustById);
router.post('/',addcust);
router.put('/:id',updateCust);
router.delete('/:id',deleteCust);

module.exports = router