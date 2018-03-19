console.dir(document);

// console.log(document.getElementById('header-title'));

let student = {
  firstName: ["Magnus", "Alex"],
  lastName: "Wallin",
  age: 38,
  classes: ["street", "dancehall", "ballet"]
};
console.log(student);
console.log(student.classes[1]);

let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.innerText = "Welcome" +" "+ student.firstName[1]

// Functions for selecting workshops for Students
// Beach Dance Workshop
let button1 = document.getElementById('button1').addEventListener('click', buttonClick);
function buttonClick(){
  let getValue1 = document.getElementsByClassName('workshop1')[1].value
  let getDanceTitle1 = document.getElementsByClassName('workshop1').danceTitle1.innerHTML
  console.log(getValue1);
  workshops.push(getDanceTitle1 + " - " + getValue1)

  let workshopList = document.getElementsByClassName('workshopList');
  let ul = document.createElement('ul');
  workshopList[0].innerHTML="";
  workshopList[0].appendChild(ul);

  for (var i = 0; i < workshops.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = workshops[i];
    workshopList[0].appendChild(li);
  }
}

// Breakdance Workshop
let button2 = document.getElementById('button2').addEventListener('click', buttonClick2);
function buttonClick2() {
  let getValue2 = document.getElementsByClassName('workshop2')[1].value
  let getDanceTitle2 = document.getElementsByClassName('workshop2').danceTitle2.innerHTML
    console.log(getValue2);
    li2.innerText = getDanceTitle2 + " - " + getValue2
}

// Classic Dance Workship
let button3 = document.getElementById('button3').addEventListener('click', buttonClick3);
function buttonClick3() {
  let getValue3 = document.getElementsByClassName('workshop3')[1].value
  let getDanceTitle3 = document.getElementsByClassName('workshop3').danceTitle3.innerHTML

  console.log(getValue3);
  li3.innerText = getDanceTitle3 + " - " + getValue3
}

let workshops = [];

window.addEventListener('load', function(){
let workshopList = document.getElementsByClassName('workshopList');
let ul = document.createElement('ul');
workshopList[0].appendChild(ul);

for (var i = 0; i < workshops.length; i++) {
  let li = document.createElement('li');
  console.log("li!" + li);
  li.innerHTML = workshops[i];
  workshopList[0].appendChild(li);
}
});
