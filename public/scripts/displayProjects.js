import { getCurrentUser, setCurrentUser, removeCurrentUser, logout, fetchData } from './main.js'

let projects
Array.projects = await getAllProjects();
console.log("Projects: ", projects);
let displayProjectHTML = document.getElementById("displayProject");
if (projects) {
    projects.forEach((project) => {
        let section =
            `
    <img class="card-img-top" src="${project.getProjectThumbnail()}" alt="Card image cap">
        <div class="card-body">
            <h2>${project.getProjectName()}</h2>
            <p>${project.getProjectText()}</p>
            <p>${project.getProjectGitHub()}</p>
            <p>${project.getProjectLikes()} likes</p>
            <p>${project.getProjectComments()} comments</p>
            <p>${project.getProjectTags()}</p>
            <form action="#">
                <textarea name="comment" id="comment" rows="2" cols="30"></textarea>
                <br>
                <label for="comment"><button type="button" class="btn btn-primary" id="newComment">
                <i class="fa-solid fa-comment"></i> Add comment</button></label>
            </form>
            
        </div>
    `
        displayProjectHTML.innerHTML += section;
    });
}

/*async function getAllProjects() {
    return await fetch('/projects/')
    .then((data) => {
        if(!data.message) {
            console.log(data.json);
            return data;
        }
    })
    .catch((error) => {
        const errText = error.message;
        console.log(`Error! ${errText}`)
    });
}*/

/*async function getAllProjects() {
    let url = '/projects/';
    try {
        let res = await fetch(url);
        console.log(res);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}*/

async function getAllProjects() {
    fetch('http://localhost:3000/projects/')
        .then(response => response.json())
        .then((data) => data.forEach((project) => {
            let section =
                `
            <div class="card" style="width: 22rem;">
        <img class="card-img-top" src="${project.projectThumbnail}" alt="Card image cap">
            <div class="card-body">
                <h2>${project.projectName}</h2>
                <p>${project.projectText}</p>
                <p>${project.projectGitHub}</p>
                <p>${project.projectLikes} likes</p>
                <p>${project.projectCommentIds} comments</p>
                <p>${project.projectTags}</p>
                <form action="#">
                    <textarea name="comment" id="comment" rows="2" cols="30"></textarea>
                    <br>
                    <label for="comment"><button type="button" class="btn btn-primary" id="newComment">
                    <i class="fa-solid fa-comment"></i> Add comment</button></label>
                </form>
                
            </div>
            </div>
        `
            displayProjectHTML.innerHTML += section;
        }));

}

/*async function renderUsers() {
    let projects = await getAllProjects();
    let html = '';
    projects.forEach(user => {
        let htmlSegment = `<div class="user">
                            <img src="${user.profileURL}" >
                            <h2>${user.firstName} ${user.lastName}</h2>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();*/