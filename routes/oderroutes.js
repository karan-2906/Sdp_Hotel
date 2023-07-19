const { Router } = require('express')
const { getAllorder, addorder, updateorder, deleteorder } = require('../controllers/ordercontroller')
const router = Router();

router.get('/', getAllorder);
router.post('/addorder', addorder);
router.put('/updateorder/:id', updateorder);
router.delete('/deleteorder/:id', deleteorder);

module.exports = router;
