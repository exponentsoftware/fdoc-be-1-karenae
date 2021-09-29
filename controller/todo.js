const Todo = require('../models/todo')
const ObjectId = require('mongodb')
const User = require('../models/user.js');
const moment = require('moment');

const createTodo = async (req,res)=>{
    try{
        let { _id } = req.user
        const {userName, todoTitle, todoCompleted, todoCategory} = req.body

        let todo = await Todo.findOne({todoTitle:todoTitle})
        if(todo) return res.status(403).json({message:'todo already exists',})

        const newTodo = new Todo({userName:userName,todoTitle:todoTitle,todoCategory:todoCategory,todoCompleted:todoCompleted,userId:_id})
        let saveTodo = await newTodo.save()
        res.status(201).json({status: 'success',message: saveTodo})
    }
    catch(err){
        console.log(err);
    }
}
// Add capability to sort the data by created_at

const getTodos = async (req,res) => {
    try{
        // let { _id } = req.user
        const { limit, skip, page } = req.pagination
        let [todos] = await Todo.aggregate([
            { $match: {$and: matchFilter}},
            {'$facet': {
              meta: [ { $count: 'total' }, { $addFields: { page: page } } ],
              data: [ { $skip: skip }, { $limit: limit } ], 
            }},
            { $project:  global.paginationProject },
        ])
        if(todos.length == 0) return res.json({message:' no todos created'});
        res.status(200).json({data:todos,metadata:todos.length});
    }
    catch(err){
        console.log(err)
    }
}

// for current day
// for a week
// for a month
const getTodo = async (req,res) => {
    try{
        let todo = await Todo.find(
           {"createdAt": {"$gte": new Date(new Date() - 7 * 60 * 60 * 24 * 1000)}}
        
            // { 
            //     "$match": {
            //       createdAt: { 
            //         "$gte": "2021-09-26T13:13:45.571Z",
            //         //  "$lt": moment().startOf('week').toDate()
            //       },
            //     }
            //   }
        )
        console.log(todo)
        res.status(200).send(todo)
    }
    catch(err){
        console.log(err)
    }
}

const getTodobydate = async (req,res) => {
    try{
        let todo = await Todo.find(
            {"createdAt": {"$gte": new Date("2021-09-29")}}
            // { 
            //     "$match": {
            //       createdAt: { 
            //         "$gte": "2021-09-26T13:13:45.571Z",
            //         //  "$lt": moment().startOf('week').toDate()
            //       },
            //     }
            //   }
        )
        console.log(todo)
        res.status(200).send(todo)
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

module.exports = { createTodo, getTodo, getTodos, getTodobydate, updateTodo, deleteTodo }