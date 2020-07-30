const express = require('express');
const router = express.Router();
const todoController = require('../controllers');

router.get('/', todoController.getTodos);
router.post('/', todoController.addTodo);
router.get('/:id', todoController.getOneTodo);
router.patch('/:id', todoController.updateOneTodo);
router.delete('/:id', todoController.deleteOneTodo);

module.exports = router;
