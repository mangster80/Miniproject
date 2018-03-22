document.getElementById('getUsers').addEventListener('click', getUsers);

function getUsers() {
  fetch('../js/users.json')
    .then((res) => res.json())
    .then((data) => {
      let output = '';
      data.forEach(function(user) {
        output +=
          `
        <ul class="list-group mb-3">
          <li class="list-group-item">Firstname: ${user.firstname}</li>
          <li class="list-group-item">Lastname: ${user.lastname}</li>
          <li class="list-group-item">Age: ${user.age}</li>
          <li class="list-group-item">Classes: ${user.classes}</li>
        </ul>
      `;
      });
      document.getElementById('output').innerHTML = output;
    })
}
