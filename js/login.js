let login = function () {
  let username = document.forms["form-control"]["username"].value;
  let password = document.forms["form-control"]["password"].value;
  if (username == "Mange" && password == "123") {
    window.location.replace = student.html;
    return false;

  }
  else if (username == "Alex" && password == "123") {
    window.location.replace = student.html;
    return false;
  }
  else if (username == "teacher" && password == "123"){
    window.location.replace = teacher.html;;
    return false;
  }
}

let student = {
  firstName: ["Magnus", "Alex"],
  lastName: "Wallin",
  password: pass,
  email: mange@mail.com,
  classes: ["street", "dancehall", "ballet"]
};

let teacher = {
  firstName: []
}
