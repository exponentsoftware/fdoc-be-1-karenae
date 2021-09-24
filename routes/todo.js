const express = require('express');
const { createTodo, getTodo, getTodoBy, updateTodo, deleteTodo } = require('../controller/todo');
const router = express.Router()



router.post('/addtodo',createTodo);
router.get('/todos',getTodo);
router.get('/todo/:id',getTodoBy);
router.put('/todo/:id',updateTodo);
router.delete('/todo/:id',deleteTodo);


module.exports = router;