// document.getElementById('readStudents').addEventListener('click', readStudents);
let student, teacher, classes = [];
let url = "http://localhost:8080";

// output capital letters
const capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Fetch students and print out list
function readStudents() {
  fetch(url + '/student')
    .then((res) => res.json())
    .then((data) => {
      let output = ''
      student = data
      student.forEach(function(stud) {
        output +=
          `
            <li class="list-group-item">${capitalize(stud.firstname)} ${capitalize(stud.lastname)}</li>
          `
        console.log(stud.firstname)
      })
      document.getElementById('output').innerHTML = output
    })

  fetch(url + '/teacher')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      teacher = data
    })

  fetch(url + '/classes')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      classes = data
      // do stuff here
    })
}

function readTeachers() {
  fetch('../js/users.json')
    .then((res) => res.json())
    .then((data) => {
      let output = ''
      teacher = data
      teacher.forEach(function(teach) {
        output +=
          `
            <li class="list-group-item">${capitalize(teach.firstname)} ${capitalize(teach.lastname)}</li>
          `
        console.log(teach.firstname)
      })
      document.getElementById('output').innerHTML = output
    })
}
