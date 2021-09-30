const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();



const Port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



mongoose.connect(process.env.MongoURI,{ 
    useNewUrlParser:true,
    useUnifiedTopology: true}).then(()=>console.log('database connected')).catch((err)=>console.log(err))

// 

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.send('index.ejs')
})

    
app.get('/login', (req, res) => {
    res.render('login.ejs')
})
      

app.get('/signup',(req,res)=>{
    res.render('register.ejs')
})

const todoRouter = require('./routes/todo')
const userRouter = require('./routes/userAuth')
const viewRouter = require('./routes/views')

app.use('/api',todoRouter)
app.use('/api',userRouter)
app.use('/api',viewRouter)

app.listen(Port,()=>{console.log('listening on 8080')})



