const express = require('express');
const { createTodo, getTodo, getTodoBy, updateTodo, deleteTodo } = require('../controller/todo');
const { requiresignin } = require('../middleware/authentication');

const router = express.Router()



router.post('/addtodo',requiresignin ,createTodo);
router.get('/todos',requiresignin,getTodo);
router.get('/todo/:id',requiresignin,getTodoBy);
router.put('/todo/:id',requiresignin,updateTodo);
router.delete('/todo/:id',requiresignin,deleteTodo);


module.exports = router;