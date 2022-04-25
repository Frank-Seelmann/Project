import 
{ getCurrentUser, setCurrentUser, removeCurrentUser, logout, fetchData } 
from './main.js'


let user = getCurrentUser();

if(!user) window.location.href = "login.html";

let profile = document.getElementById("profile");
profile.innerHTML = `
<div class="card p-4 marginbottom">
<div class=" image d-flex flex-column justify-content-center align-items-center"> <button class="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button> <span class="name mt-3">${user.userName}</span>
    <div class="d-flex flex-row justify-content-center align-items-center mt-3"> <span class="number">1069 <span class="follow">Followers</span></span> </div>
    <div class=" d-flex mt-2"> <button class="btn1 btn-dark" id="edit">Edit Profile</button> </div>
    <div class="text mt-3"> <span>${user.userName} is a creator of minimalistic x bold graphics and digital artwork.<br><br> Artist/ Creative Director by Day #NFT minting@ with FND night. </span> </div>
    <div class=" px-2 rounded mt-4 date "> <span class="join">Joined May,2021</span> </div>
    <div class=" d-flex mt-2"> <button class="btn1 btn-dark" id="delete">Delete Account</button> </div>
</div>
</div>
`;

document.getElementById("edit").addEventListener('click', editProfile);
document.getElementById("delete").addEventListener('click', deleteAccount);

function editProfile() {
  profile.classList.toggle("hide");
  let editForm = document.getElementById("editForm");
  editForm.innerHTML = `
    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <form id="form" class="basic-form">
      <p class="error"></p>
      <h2>Edit Profile</h2>
      <label for="username">Change Username</label>
      <input type="text" name="username" id="username" placeholder="${user.userName}">
      <br>
      <input type="submit" value="Submit">
    </form>
    </div>
    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <form id="passForm" class="basic-form">
      <p class="error"></p>
      <h2>Change Password</h2>
      <label for="pswd">Change Password</label>
      <input type="password" name="pswd" id="pswd">
      <br>
      <input type="submit" value="Submit">
    </form>
    <button class="btn" id="cancel">Cancel</button>
    </div>
  `;

  editForm.addEventListener('submit', editAccount)
  document.getElementById("cancel").addEventListener('click', (e) => {
    window.location.href = "profile.html";
  })
}

function deleteAccount() {
  if(confirm('Are you sure you want to delete your account???')) {
    fetchData('/users/delete', {userId: user.userId}, "DELETE")
    .then((data) => {
      if(!data.message) {
        console.log(data.success)
        logout();
        window.location.href = "register.html"
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#profile div p.error").innerHTML = errText;
      console.log(`Error! ${errText}`)
    })
  }
}