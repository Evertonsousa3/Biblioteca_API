const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())


const Book = mongoose.model('Book', { 
    title: String,
    author: String,
    description: String, 
});

app.get('/books/:id', async (req, res) => {
    const books = await Book.find()
    return res.send(books)
})
  
app.delete('/books/:id', async (req, res) =>{
    const book = await Book.findByIdAndDelete(req.params.id)
    return res.send(book)
})

app.put('/books/:id', async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, {
        title:req.body.title,
        author:req.body.author,
        description:req.body.description
    },{
        new:true
    })
    return res.send(book)
})

app.post('/books', async (req, res) => {
    const book = new Book ({
        title:req.body.title,
        author:req.body.author,
        description:req.body.description
    })
    await book.save()
    return res.send(book)
})


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('App running')
    mongoose.connect('mongodb+srv://evertonsousa3557:BuEcTRTM8nwlthrO@bibliotecaapi.aafwbke.mongodb.net/?retryWrites=true&w=majority');
})