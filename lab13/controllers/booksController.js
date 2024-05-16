
const Book = require('../models/booksModel');

exports.save=(req,res,next)=>{
    const newBook = new Book(null,req.body.title,req.body.ISBN,req.body.publishedDate,req.body.author).save();
    res.status(201).json(newBook);
}

exports.getBooks=(req,res,next)=>{

res.status(200).json(Book.getAll());
}
exports.getBookById=(req,res,next)=>{
    res.status(200).json(Book.getBookById(req.params.id))
}

exports.update=(req,res,next)=>{
    new Book(null,req.body.title,req.body.ISBN,req.body.publishedDate,req.body.author).update(req.params.id);
    res.status(204).end();
}

exports.deleteById=(req,res,next)=>{
res.status(200).json(Book.deleteById(req.params.id));
}

exports.deleteAll=(req,res,next)=>{
    res.status(200).json(Book.deleteAll());
}