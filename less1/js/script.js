"use strict";
const sel = document.querySelector(".box-one");
const btnAdd = document.getElementById('btn-add');
const btnEdit = document.getElementById('btn-edit');
const tbody = document.querySelector("tbody");
const form = document.forms[0];

let getEl = (el) => document.querySelector(el);

let loginRegExp = /^\w{4,16}$/;
let passRegExp = /^[a-zA-Z0-9_@#&]{4,16}$/;
let emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


getEl("form").addEventListener("input", function (event) {
  let login = loginRegExp.test(form.children[1].value);
  let pass = passRegExp.test(form.children[3].value);
  let email = emailRegExp.test(form.children[5].value);


  if (event.target == form.children[1]) {
    form.children[0].style.setProperty(
      "--my-var",
      `\"Please provide a valid Login (a-Z, num, 4-16 symbol\"`
    );

    if (login) {
      form.children[0].classList.remove("forum-after");
      form.children[0].classList.remove("forum-before");

      form.children[0].classList.add("forum-after-true");
    } else {
      form.children[0].classList.add("forum-after");
      form.children[0].classList.add("forum-before");

      form.children[0].classList.remove("forum-after-true");
    }
  }

  if (event.target == form.children[3]) {
    form.children[2].style.setProperty(
      "--my-var",
      `\"Please provide a valid PASSWORD (4 - 16 symbol)\"`
    );
    if (pass) {
      form.children[2].classList.remove("forum-after");
      form.children[2].classList.remove("forum-before");
      form.children[2].classList.add("forum-after-true");
    } else {
      form.children[2].classList.add("forum-after");
      form.children[2].classList.add("forum-before");
      form.children[2].classList.remove("forum-after-true");
    }
  }

  if (event.target == form.children[5]) {
    form.children[4].style.setProperty(
      "--my-var",
      `\"Please provide a valid EMAIL\"`
    );
    if (email) {
      form.children[4].classList.remove("forum-after");
      form.children[4].classList.remove("forum-before");
      form.children[4].classList.add("forum-after-true");
    } else {
      form.children[4].classList.add("forum-after");
      form.children[4].classList.add("forum-before");
      form.children[4].classList.remove("forum-after-true");
    }
  }

  if (login && pass && email) {
    btnAdd.removeAttribute("disabled");
    btnAdd.style.cursor = 'pointer';
  }

  if (!btnEdit.classList.contains('btn-none')) {
    if (login && pass && email) {
      btnEdit.removeAttribute("disabled");
      btnEdit.style.cursor = 'pointer';
    }
  }

});

let data = [];

console.log(btnAdd.attributes)

btnAdd.addEventListener("click", function addUser() {
  let dataObj = {
    log: sel.querySelector("input[type='text']").value,
    pass: sel.querySelector("input[type='password']").value,
    email: sel.querySelector("input[type='email']").value,
  };
  data.push(dataObj);

  document.forms[0].reset();
  btnAdd.setAttribute("disabled", "disabled");
  btnAdd.style.cursor = '';
  return render();
});

function render() {
  tbody.innerHTML = null;
  for (let y = 0; y < data.length; y++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${y + 1}</td>
        <td>${data[y].log}</td>
        <td>${data[y].pass}</td>
        <td>${data[y].email}</td>
        <td><button class='edit'>Edit</button></td>
        <td><button class='delete'>Delete</button></td>`;
    tbody.appendChild(tr);
  }
  form.children[0].classList.remove("forum-after-true");
  form.children[2].classList.remove("forum-after-true");
  form.children[4].classList.remove("forum-after-true");
}

let userIndex;

tbody.onclick = (event) => {
  userIndex = event.target.parentElement.parentElement.firstElementChild.textContent - 1;
  let el = event.target.parentElement.parentElement;

  if (event.target.classList == "edit") {
    document.getElementById('btn-add').classList.add('btn-none');
    document.getElementById('btn-edit').classList.remove('btn-none');
    return editUser(userIndex);
  }

  if (event.target.classList == "delete") {
    el.remove();
    return deleteUser(userIndex);
  }
}

function deleteUser(userIndex) {
  data.splice(userIndex, 1);
  return render();
}

function editUser(userIndex) {
  sel.querySelector("input[type='text']").value = data[userIndex].log;
  sel.querySelector("input[type='password']").value = data[userIndex].pass;
  sel.querySelector("input[type='email']").value = data[userIndex].email;

  render();
}


btnEdit.addEventListener('click', function saveEditUser() {

  data[userIndex] = {
    log: sel.querySelector("input[type='text']").value,
    pass: sel.querySelector("input[type='password']").value,
    email: sel.querySelector("input[type='email']").value,
  }

  sel.querySelector("input[type='text']").value = null;
  sel.querySelector("input[type='password']").value = null;
  sel.querySelector("input[type='email']").value = null;

  document.getElementById('btn-add').classList.remove('btn-none');
  document.getElementById('btn-edit').classList.add('btn-none');
  btnEdit.setAttribute("disabled", "disabled");
  btnAdd.setAttribute("disabled", "disabled");
  btnEdit.style.cursor = '';
  btnAdd.style.cursor = '';
  render();
}) 
