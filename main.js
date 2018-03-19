console.dir(document);

// console.log(document.getElementById('header-title'));

var student = {
  firstName: ["Magnus", "Alex"],
  lastName: "Wallin",
  age: 38,
  classes: ["street", "dancehall", "ballet"]
};
console.log(student);
console.log(student.classes[1]);

var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.innerText = "Welcome" +" "+ student.firstName[1]

var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(){
  console.log('Button clicked');
}
