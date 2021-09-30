const mongoose = require('mongoose')

const viewSchema = new mongoose.Schema({
    todoTitle:{type: String,required: true, trim: true},
    likes : {type: String,default:'0'},
    ratings: {type: Number,default:0},
    userId : {type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    todoId : {type:mongoose.Schema.Types.ObjectId,ref:'Todo',required:true},
},
{timestamps: true}
)

module.exports = mongoose.model('Views',viewSchema)