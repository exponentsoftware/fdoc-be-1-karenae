const mongoose = require('mongoose')

const CATEGORY_ENUM  = ['work', 'hobby', 'task']

const todoSchema = new mongoose.Schema({
    userName:{type: String,required: true, trim: true},
    todoTitle:{type: String,required: true, trim: true},
    todoCompleted:{type: Boolean,default:false},
    todoCategory: {type: [String],required: true, enum: CATEGORY_ENUM, default:'task'},
    userId : {type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}
},
{timestamps: true}
)

module.exports = mongoose.model('Todo',todoSchema)