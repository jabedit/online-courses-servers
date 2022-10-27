const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
const courses = require('./data/course.json')
const categories = require('./data/categories.json')


app.get('/', (req, res) =>{
    res.send('education api running')
})

app.get('/courses', (req, res) =>{
    res.send(courses)
})
app.get('/courses/:id', (req, res) =>{
    const id = req.params.id
    const selectCourse = courses.find(course => course._id === id)
    res.send(selectCourse)
    
})

app.get('/coures-categories', (req, res) =>{
    res.send(categories)
})
app.get('/category/:id', (req, res) =>{
    const id = req.params.id 
    if(id == "06"){
        res.send(courses)
    }
   else{
    const category_coures = courses.filter( coures => coures.category_id === id)
    res.send(category_coures)
    console.log(category_coures)
   }
})



app.listen(port, () =>{
    console.log('Educational server Running on Port', port)
})