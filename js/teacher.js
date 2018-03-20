document.getElementById('readStudents').addEventListener('click', readStudents);
  let student, teacher, classes = [];
  let url = "http://localhost:8080";

  function readStudents () {
    fetch(url + '/student')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      student = data
      fetch(url + '/teacher')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        teacher = data
        fetch(url + '/classes')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          classes = data
          // do stuff here
        })
      })
    })
  }
