const express = require('express');
const path = require('path')
const PORT = 3000;
const app = express();


app.use(express.json());
app.use(express.urlencoded());

app.get('/api',async (req,res) => {

  // api call
  const thing = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then((response) => response.json());

  res.send(thing);
})
app.use(express.static(path.resolve(__dirname,'../build')))
// app.get('/homepage',(req,res) => {
//   res.sendFile(path.resolve(__dirname,'../build/test.html'))
// })
app.listen(PORT)

module.exports = app;