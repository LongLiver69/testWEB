
var express = require('express')
var router = express.Router()

const studentController = require('../app/controllers/StudentController')

router.get('/create', studentController.create);
router.post('/store', studentController.store);
router.get('/trash', studentController.trash);
router.get('/:id/edit', studentController.edit);
router.patch('/:id/restore', studentController.restore);
router.delete('/:id/destroy', studentController.destroy);
router.delete('/:id', studentController.delete);
router.put('/:id', studentController.update);
router.get('/:id', studentController.detail);
router.get('/', studentController.show);


module.exports = router