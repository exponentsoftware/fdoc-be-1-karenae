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
// Add capability to sort the data by created_at

const getTodo = async (req,res) => {
    try{
        let titleSearchQuery = req.query.todoTitle
        let categorySearchQuery = req.query.todoCategory
        if(titleSearchQuery != undefined) {
            let todos = await Todo.find({todoTitle:{$regex:`${titleSearchQuery}`,$options:'i'}}).sort({todoCategory:-1})
            if(todos.length == 0) return res.json({message:' no todos created'});
            res.status(200).json({data:todos,metadata:todos.length});
        }else if(categorySearchQuery != undefined){
            let todos = await Todo.find({todoCategory:{$regex:`${categorySearchQuery}`,$options:'i'}} ).sort({todoCategory:-1})
            if(todos.length == 0) return res.json({message:' no todos created'});
            res.status(200).json({data:todos,metadata:todos.length});
        }
        else{
            let todos = await Todo.find()
            if(todos.length == 0) return res.json({message:' no todos created'});
            res.status(200).json({data:todos,metadata:todos.length});
        }
    }
    catch(err){
        console.log(err)
    }
}

const getTodoBy = async (req,res) => {
    try{
        let todo = await Todo.findById({_id:req.params.id})
        if(todo.length == 0) return res.status(404).json({message:' no todos created'});
        res.status(200).json({data:todo});

    }
    catch(err){
        console.log(err)
    }
}

const updateTodo = async (req,res) => {
    try{
        const {todoTitle, todoCompleted, todoCategory} = req.body
        let todo = await Todo.findByIdAndUpdate({_id:req.params.id},{ todoTitle:todoTitle, todoCompleted:todoCompleted, todoCategory:todoCategory })
        if (todo === null) res.status(403).json({ status: 'error', message: 'failed to update todo' })
        else res.status(200).json({ status: 'success', message: 'successfully Updated' })
    }
    catch(err){
        console.log(err)
    }
}
const deleteTodo = async (req, res) => {
    try{
        let result = await Todo.findOneAndRemove({_id:req.params.id})
        if (result === null) res.status(403).json({ status: 'error', message: 'failed to delete todo' })
        else res.status(200).json({ status: 'success', message: 'successfully deleted' })
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = { createTodo, getTodo, getTodoBy, updateTodo, deleteTodo }