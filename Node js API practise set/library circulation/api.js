const express = require('express');
const router = express.Router();

const Books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        available: true
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        available: true
    },
    {
        id: 3,
        title: "Clean Code",
        author: "Robert C. Martin",
        available: true
    }
];

router.get('/books', (req, res) => {

    return res.status(200).json({
        Books
    });
});

router.get('/books/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const book = Books.find(
        book => book.id === id
    );

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    return res.status(200).json({
        book
    });
});

router.post('/books', (req, res) => {

    const title = req.body.title;
    const author = req.body.author;

    if (!title || !author) {
        return res.status(400).json({
            message: "Please provide valid book details"
        });
    }

    const book = {
        id: Books.length + 1,
        title,
        author,
        available: true
    };

    Books.push(book);

    return res.status(201).json({
        message: "Book added successfully",
        book
    });
});

router.post('/books/issue', (req, res) => {

    const bookId = req.body.bookId;

    if (bookId === undefined) {
        return res.status(400).json({
            message: "bookId is required"
        });
    }

    const book = Books.find(
        book => book.id == bookId
    );

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    if (!book.available) {
        return res.status(400).json({
            message: "Book is already issued"
        });
    }

    book.available = false;

    return res.status(200).json({
        message: "Book issued successfully",
        book
    });
});

router.post('/books/return', (req, res) => {

    const bookId = req.body.bookId;

    if (bookId === undefined) {
        return res.status(400).json({
            message: "bookId is required"
        });
    }

    const book = Books.find(
        book => book.id == bookId
    );

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    book.available = true;

    return res.status(200).json({
        message: "Book returned successfully",
        book
    });
});

module.exports = router;