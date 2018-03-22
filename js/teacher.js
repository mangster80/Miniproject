// document.getElementById('readStudents').addEventListener('click', readStudents);
let student, teacher, classes = [];
let url = "http://localhost:8080";

function readStudents() {
  fetch(url + '/student')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h1>Street</h1>' + '<br>' + '<h4> Students </h4>'
      student = data
      student.forEach(function(stud) {
        output +=
          `
            <ul class="list-group mb-3" data-toggle="collapse" href="#collapse1">
                <li class="list-group-item flex-start">${stud.firstname} ${stud.lastname}</li>
              </ul>
            `
        console.log(stud.firstname)
      })
      document.getElementById('output').innerHTML = output
      document.getElementById('output1').innerHTML = output
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
