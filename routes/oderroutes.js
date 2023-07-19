const {Router} = require('express')
const {getAllorder,addorder} = require('../controllers/ordercontroller')
const router = Router();

router.get('/',getAllorder);
router.post('/addorder',addorder);

module.exports = router;
