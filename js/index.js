/* jshint esversion: 6 */
/* jscs:disable maximumLineLength */

const express = require('express');
const app = express();
const mysql = require('mysql')
const port = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port);

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'danceSchool'
})

// Connect
db.connect((err) => {
  if (err) {
    throw err
  }
  console.log('MySql Connected')
})
// Create DB
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE danceSchool'
  db.query(sql, (err, result) => {
    if (err) throw err
    console.log(result)
    res.send('Database created')
  })
})

app.get('/createnewtable/', (req, res) => {
  let sql = 'CREATE TABLE classes(id int AUTO_INCREMENT, name VARCHAR(255), score INT(255), PRIMARY KEY (id))'
  db.query(sql, (err, result) => {
    if (err) throw err
    console.log('result')
    res.send('Teams table created')
  })
})

const student = [
  {
    "firstname":"lisa",
    "lastname":"laFlamme",
    "age":21,
    "classes":["street", "dancehall", "balett"]
  },
  {
    "firstname": "Alex",
    "lastname": "Pitt",
    "age": 32,
    "classes": ["street", "balett"]
  },
  {
    "firstname": "Mange",
    "lastname": "Kardashian",
    "age": 35,
    "classes": ["street"]
  },
  {
    "firstname": "Jonny",
    "lastname": "Wallin",
    "age": 19,
    "classes": ["street", "dancehall", "balett"]
  },
  {
    "firstname": "Filip",
    "lastname": "Bentzer",
    "age": 17,
    "classes": ["street", "dancehall", "balett"]
  },
  {
    "firstname": "Ronja",
    "lastname": "Rövardotter",
    "age": 45,
    "classes": ["street", "balett"]
  },
  {
    "firstname": "Kristian",
    "lastname": "Rigaud",
    "age": 39,
    "classes": ["balett"]
  },
  {
    "firstname": "Julia",
    "lastname": "Bessouda",
    "age": 31,
    "classes": ["balett", "street"]
  },
  {
    "firstname": "Maryam",
    "lastname": "Kitten",
    "age": 25,
    "classes": ["balett", "street"]
  },
  {
    "firstname": "Camilla",
    "lastname": "Gustavsson",
    "age": 22,
    "classes": ["balett", "street"]
  },
  {
    "firstname": "Cecilia",
    "lastname": "Sigurdardottir",
    "age": 21,
    "classes": ["balett", "street", "dancehall"]
  },
  {
    "firstname": "Frida",
    "lastname": "Svahnen",
    "age": 27,
    "classes": ["balett", "street", "dancehall"]
  },
  {
    "firstname": "Mattias",
    "lastname": "Chiquita",
    "age": 27,
    "classes": ["balett", "dancehall"]
  },
  {
    "firstname": "Leo",
    "lastname": "Milojevic",
    "age": 30,
    "classes": ["balett", "dancehall"]
  },
  {
    "firstname": "Grímúlfur",
    "lastname": "Grímsson",
    "age": 59,
    "classes": ["balett", "dancehall"]
  }
]

const teacher = [
  {
    "firstname": "Adrienne",
    "lastname": "Picard",
    "age": 21,
    "classes": "street"
  },
  {
    "firstname":"Rocky",
    "lastname":"Balboa",
    "age": 39,
    "classes":["street", "dancehall", "balett"]
  },
  {
    "firstname":"Sally",
    "lastname":"Sjöström",
    "age": 1,
    "classes":["street", "dancehall", "balett"]
  }
]

const classes = [
  {
    "name": "Street",
    "dates": ["2018-03-16", "2018-03-23", "2018-03-30"],
    "start": "18:00",
    "length": 2
  },
  {
    "name": "dancehall",
    "dates": ["2018-03-17", "2018-03-24", "2018-04-01"],
    "start": "18:00",
    "length": 2
  },
  {
    "name": "balett",
    "dates": ["2018-03-18", "2018-03-25", "2018-04-02"],
    "start": "18:00",
    "length": 2
  }
]

// todo add classes
const capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// todo: functions to return number of students of a class, which dates a student/teacher has depending on classes

let res;

app.get('/student', function(req, res) {
  res.json(student);
});
app.get('/teacher', function(req, res) {
  res.json(teacher);
});
app.get('/classes', function(req, res) {
  res.json(classes);
});

// todo add classes endpoint
console.log(`App listening on port ${port}`);
