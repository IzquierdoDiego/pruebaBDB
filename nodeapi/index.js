const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const util = require('util');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  port: '6033',
  user: 'db_user',
  password: 'db_user_pass',
  database: 'app_db'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all locations
app.get('/api/locations',(req, res) => {
  console.log('---------------------------------------------');
  console.log(req.body);
  console.log('---------------------------------------------');
  let sql = "SELECT * FROM location";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single locations
app.get('/api/locations/:id',(req, res) => {
  let sql = "SELECT * FROM location WHERE namel="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//add new locations
app.post('/api/locations',(req, res) => {
  let data = {namel: req.body.namel, area_2m: req.body.area_2m, parent: req.body.parent};
  console.log('---------------------------------------------');
  let sql = "INSERT INTO location SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Delete locations
app.delete('/api/locations/:id',(req, res) => {
  let sql = "DELETE FROM location WHERE product_id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
 
//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});
