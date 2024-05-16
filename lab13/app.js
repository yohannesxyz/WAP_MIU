const Express = require('express');
const BooksRouter=require('./routes/booksRouter')

const app=Express();
app.use(Express.json());
app.use('/books',BooksRouter);

app.use((error, req, res, next) => {
    if (error.message.startsWith('There is')) {
        res.status(404).json({ success: false, message: error.message });
    } else {
        res.status(500).json({success:false,message:error.message});
    }
});

app.listen(3000,()=>"listning on 3000...");
