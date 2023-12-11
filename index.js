require('dotenv').config()
const express = require('express')


//accquire express 
const app = express()
//all the model are extracted 

//reg is used for request 
//res is used for respone 
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//this are call back function
app.get('/twitter',(req,res)=>
{
    res.send("twitter login");

})
app.get('/login',(req,res)=>
{
   res.send('<h1>i am true coder</h1>');
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})