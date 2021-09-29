const express = require('express');
const { createTodo, getTodo, getTodos, getTodobydate, updateTodo, deleteTodo } = require('../controller/todo');

const { requiresignin } = require('../middleware/authentication');

const router = express.Router()



router.post('/addtodo',requiresignin ,createTodo);
router.get('/todo',getTodo);
router.get('/todo/todays',getTodobydate);
router.get('/todos',getTodos);
router.put('/todo/:id',requiresignin,updateTodo);
router.delete('/todo/:id',requiresignin,deleteTodo);


module.exports = router;