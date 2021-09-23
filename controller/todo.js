const Todo = require('../models/todo')

const createTodo = async (req,res)=>{
    try{
        const {userName, todoTitle, todoCompleted, todoCategory} = req.body

        let todo = await Todo.findOne({todoTitle:todoTitle})
        if(todo) return res.status(403).json({message:'todo already exists',})

        const newTodo = new Todo({userName:userName,todoTitle:todoTitle,todoCategory:todoCategory,todoCompleted:todoCompleted})
        let saveTodo = await newTodo.save()
        res.status(201).json({status: 'success',message: saveTodo})
    }
    catch(err){
        console.log(err);
    }
}

const getTodo = async (req,res) => {
    try{
        let todos = await Todo.find({})
        if(todos.length == 0) return res.json({message:' no todos created'});
        res.status(200).json({data:todos,metadata:todos.length});

    }
    catch(err){
        console.log(err)
    }
}

const getTodoBy = async (req,res) => {
    try{
        let todo = await Todo.findById({_id:req.params.id})
        if(todo.length == 0) return res.json({message:' no todos created'});
        res.status(200).json({data:todo});

    }
    catch(err){
        console.log(err)
    }
}

module.exports = { createTodo, getTodo, getTodoBy }