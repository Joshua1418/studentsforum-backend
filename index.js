var express = require("express")
var cors = require("cors")
const mysql = require("mysql")

var app = express()
app.use(cors())
app.use(express.json())

let db=mysql.createConnection({
  host:'localhost',
  user:"root",
  database:"forum_db",
  password:"",
  port: 3306
})

app.post("/add",(req,res)=>{ 
  db.query(`INSERT INTO forum_info VALUES(0, '${req.body.nom}','${req.body.message}')`, (erreur,result) => {
    return res.json();
  })  
})


app.get("/messages",(req,res)=>{ 
  db.query(`SELECT * FROM forum_info ORDER BY id ASC`, (erreur,result) => {
  return res.json(result);
  })  
})

app.post("/delete",(req,res)=>{ 
  db.query(`DELETE FROM forum_info WHERE id = '${req.body.id}'`, (erreur,result) => {
  return res.json(result);
  })  
})
 
 

app.listen(10000, ()=>{
  console.log();
})
