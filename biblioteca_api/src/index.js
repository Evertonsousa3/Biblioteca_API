const express = require('express')
const mongoose = require('mongoose');


const app = express()
app.use(express.json())
const port = 8080
mongoose.connect('mongodb+srv://evertonsousa3557:nY7msN9ebxdmt7oC@bibliotecaapi.aafwbke.mongodb.net/?retryWrites=true&w=majority');

const Book = mongoose.model('Book', { 
    title: String,
    author: String,
    description: String, 
});


app.get('/', async (req, res) => {
    const books = await Book.find()
    return res.send(books)
})
  
app.delete('/:id', async (req, res) =>{
    const book = await Book.findByIdAndDelete(req.params.id)
    return res.send(book)
})

app.put('/:id', async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, {
        title:req.body.title,
        author:req.body.author,
        description:req.body.description
    },{
        new:true
    })
    return res.send(book)
})

app.post('/', async (req, res) => {
    const book = new Book ({
        title:req.body.title,
        author:req.body.author,
        description:req.body.description
    })
    await book.save()
    return res.send(book)
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://evertonsousa3557:nY7msN9ebxdmt7oC@bibliotecaapi.aafwbke.mongodb.net/?retryWrites=true&w=majority');
    console.log(`App running`)
})