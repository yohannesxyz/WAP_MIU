const express=require('express')
const path = require('path')
const router = express.Router()

router.use(express.urlencoded({extended:true}));

router.get('/product',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','views','product.html'));
})

router.post('/product',(req,res)=>{
    console.log(req.body)
    res.send('login successfully');
})


module.exports = router;