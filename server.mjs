import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

await mongoose.connect('mongodb+srv://Shahmir:password@cluster0.9b2tk3b.mongodb.net/?retryWrites=true&w=majority');



const app = express()
const port = process.env.PORT || 3000;

let todos = [];

app.use(express.json());
app.use(cors())


app.post('/todo', (req, res) => {
    
    todos.push(req.body.Text);

    res.send({
        message: "your todo is saved",
        data: todos
    })
})
app.get('/todos', (req, res) => {
    
    res.send({
        message: "here is you todo list",
        data: todos
    })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
