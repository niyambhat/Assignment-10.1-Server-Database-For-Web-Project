const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const connection =require('./util/database')
app.use(express.static('public'))
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const db = require('./util/database')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/posts', (req,res)=>{
    let post = req.body.mypost;
    console.log(post);
    db.query(
      `
      INSERT INTO Posts(post) values ('${post}');
      `
    )
    res.redirect('/');
})

app.get('/posts', (req, res) => {
   db.query(`Select * from Posts`, function(err, result){
     res.json(result);
   });
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// db.query(
//   `
//   Create table Posts
//   (
//     id int auto_increment primary key,
//     post varchar(255)
//   )
//   `
// )