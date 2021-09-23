const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();



const Port = 8080;
app.use(express.json());


mongoose.connect(process.env.MongoURI,{ 
    useNewUrlParser:true,
    useUnifiedTopology: true}).then(()=>console.log('database connected')).catch((err)=>console.log(err))

// 


app.get('/', (req, res) => {
    res.send('hello')
})

const todoRouter = require('./routes/todo')

app.use('/api',todoRouter)

app.listen(Port,()=>{console.log('listening on 8080')})



