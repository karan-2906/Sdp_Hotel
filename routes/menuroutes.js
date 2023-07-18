const {Router} = require('express')
const {getAllMenu, addMenu,getMenuById,updateMenu,deleteMenu} = require('../controllers/menucontroller')
const router = Router();

router.get('/',getAllMenu);
router.get('/:id',getMenuById);
router.post('/',addMenu);
router.put('/:id',updateMenu);
router.delete('/:id',deleteMenu);

module.exports = router;
