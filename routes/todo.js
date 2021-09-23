const express = require('express');
const { createTodo, getTodo, getTodoBy } = require('../controller/todo');
const router = express.Router()



router.post('/addtodo',createTodo);
router.get('/todos',getTodo);
router.get('/todo/:id',getTodoBy);

module.exports = router;