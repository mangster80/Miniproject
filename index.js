/* jshint esversion: 6 */
/* jscs:disable maximumLineLength */

const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port);

const student = {
  firstname: ["Lisa", "Alex", "Mange", "Jonny", "Filip", "Ronja", "Kristian", "Julia", "Maryam", "Camilla", "Cecilia", "Frida", "Mattias", "Leo", "Grímúlfur"],
  lastname: ["LaFlamme", "Pitt", "Kardashian", "Wallin", "Bentzer", "Rövardotter", "Rigaud", "Bessouda", "Kitten", "Gustavsson", "Sigurdardottir", "Svahnen", "Chiquita", "Milojevic", "Grímsson"],
  age: [21, 32, 35, 19, 17, 45, 39, 31, 25, 22, 21, 27, 29, 30, 59],
  classes: ["street", "dancehall", "balett"]
  [{
    {"firstname" : "Lisa",
    "lastname" : "LaFlamme",
    "age" : "21",
    "classes" : "[street", "dancehall", "balett]"
  },
  }]
};

const teacher = {
  firstname: ["Adrienne", "Rocky", "Sally"]
  lastname: ["Picard", "Balboa", "Sjöström"]
  age: [21, 27, 1]
  classes: ["street", "dancehall", "balett"]
};

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

// todo add classes endpoint

console.log(`App listening on port ${port}`);
