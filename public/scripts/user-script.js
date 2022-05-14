import { fetchData, getCurrentUser, setCurrentUser, removeCurrentUser } from './main.js'

const loginForm = document.getElementById("login-form");
if (loginForm) loginForm.addEventListener('submit', login);

async function login(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const pswd = document.getElementById("pswd").value;
  await fetchData('/users/login', { username: name, password: pswd }, "POST")
    .then((data) => {
      if (!data.message) {
        setCurrentUser(data);


        //window.location.href = "home.html";
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#login-form p.error").innerHTML = errText;
      document.getElementById("pswd").value = "";
      console.log(`Error! ${errText}`)
    });

  let user = await getCurrentUser();

  await fetchData('/profiles/lastLogin', { userId: user.userId }, "PUT")
    .then(res => res.json())
    .then((data) => {
      if (!data.message) {
        console.log(data.success)
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#login-form p.error").innerHTML = errText;
      console.log(`Error! ${errText}`)
    });

}

const regForm = document.getElementById("reg-form");
if (regForm) regForm.addEventListener('submit', register);

async function register(e) {
  e.preventDefault();

  await fetchData('/users/register', {
    userName: document.getElementById("username").value,
    password: document.getElementById("pswd").value,
    email: document.getElementById("email").value,
    birthDate: document.getElementById("birthDate").value,
    isAdmin: false
  }, "POST")
    .then((data) => {
      if (!data.message) {
        setCurrentUser(data);
        //window.location.href = "home.html";
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#reg-form p.error").innerHTML = errText;
      document.getElementById("pswd").value = "";
      console.log(`Error! ${errText}`)
    });

  let name = document.getElementById("username").value;
  let id;
  await fetch(`/users/${name}`)
    .then(res => res.json())
    .then(data => {
      id = data[0].userId;
      console.log("id:", id);
    })
    .catch(err => console.log(err));

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  console.log("today:", today);

  await fetchData('/profiles/create', {
    userId: id,
    dateCreated: today,
    lastLoginDate: today,
    profilePicture: "https://www.w3schools.com/howto/img_avatar.png"
  }, "POST")
    .then((data) => {
      if (!data.message) {
        console.log("should've created profile");
        window.location.href = "home.html";
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#reg-form p.error").innerHTML = errText;
      console.log(`Error! ${errText}`)
    });
}