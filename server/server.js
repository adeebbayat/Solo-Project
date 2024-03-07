const express = require('express');
const path = require('path')
const PORT = 3000;
const app = express();
const userController = require('./controllers/userController')
const mongoose = require('mongoose')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://username:D0WB0JP63zX8nXoi@cluster0.hh5fdrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.get('/login', (req,res) => {
  res.sendFile(path.resolve(__dirname,'../build/test.html'))
})

app.post('/login',(req,res) => {
  
  const {name} = req.body
  res.redirect(`http://localhost:8080/recipe?name=${name}`)
})

app.post('/register',userController.createUser,(req,res) => {

})
app.get('/recipe*',(req,res) => {

  res.sendFile(path.resolve(__dirname,'../build/index.html'))
})

app.use((req,res) => {
  res.status(404).send('These aren\'t the droids you\'re looking for.');
})
// app.get('/homepage',(req,res) => {
//   res.sendFile(path.resolve(__dirname,'../build/test.html'))
// })
app.listen(PORT)

module.exports = app;