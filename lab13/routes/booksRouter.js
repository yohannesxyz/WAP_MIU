const express = require('express');
const router = express.Router();
const booksController=require('../controllers/booksController');

router.post('/',booksController.save);
router.get('/',booksController.getBooks);
router.get('/:id',booksController.getBookById);
router.put('/:id',booksController.update);
router.delete('/:id',booksController.deleteById);
router.delete('/',booksController.deleteAll);

module.exports=router;
