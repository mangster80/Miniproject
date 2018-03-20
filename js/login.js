let login = function () {
  let username = document.getElementById('username').value
  let password = document.getElementById('psw').value
  if (username === "Mange" && password === "123") {
    console.log('Mange');
    document.location.href = 'http://10.7.2.4:3000/html/student.html'
    return false;

  }
  else if (username === "Alex" && password === "123") {
    document.location.href = 'http://10.7.2.4:3000/html/student.html'
    console.log('Alex');
  }
  else if (username === "teacher" && password === "123"){
    console.log('teacher');
    document.location.href = 'http://10.7.2.4:3000/html/teacher.html'
    return false;
  }
  else {
    alert('finns inte')
  }
}
