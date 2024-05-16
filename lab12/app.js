const express = require('express')

const app = express();
const path = require('path');

const userRouter = require('./routes/user-route.js')
const productRouter = require('./routes/product-route.js')

// app.disable('case sensitive routing');
app.set('port',process.env.PORT || 3000);
const port = app.get('port');


app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'./views/index.html'));
})

app.use(express.static(path.join(__dirname,'public')))


app.use(userRouter);
app.use(productRouter);


app.use((req,res,next)=>{
    res.status(404).send('404 NOT FOUND');
    })

app.use((err,req,res,next)=>{
    res.status(500).send('Internal Server Error');
})


app.listen(3000,()=>console.log("running on 3000"));