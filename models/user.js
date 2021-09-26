const mongoose = require('mongoose');

const USERROLE_ENUM = ['admin','user']

const UserSchema = new mongoose.Schema({
    userName:{ type: String,required: true, trim: true},
    email :{ type: String,required: true, trim: true, unique: true},
    phone :{ type: String,required: true, trim: true, unique: true},
    password:{ type:String, required:true },
    role  :{ type: [String],required: true, enum: USERROLE_ENUM, default:'user'}
},
{timestamps: true}
)

module.exports = mongoose.model('User',UserSchema)
