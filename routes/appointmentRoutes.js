const express = require('express');
const router = express.Router();
const controller = require('../controllers/appointmentsController');


router.get('/',controller.getAll);
router.get('/:id',controller.getByID);
router.post('/',controller.insert);
router.delete('/:id',controller.del);
router.put('/:id',controller.update);

module.exports = router;