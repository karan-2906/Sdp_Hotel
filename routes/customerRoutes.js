const {Router} = require('express')
const {getALLcust, addcust, getCustById, updateCust, deleteCust} = require('../controllers/customercontroller')
const router = Router()

router.get('/',getALLcust);
router.get('/:id',getCustById);
router.get('/',addcust);
router.get('/:id',updateCust);
router.get('/:id',deleteCust);

module.exports = router