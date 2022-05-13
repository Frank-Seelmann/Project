import { fetchData } from './main.js';

let projects
Array.projects = await getAllProjects();
console.log("Projects: ", projects);
let displayProjectHTML = document.getElementById("displayProject");
if (displayProjectHTML) {
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
}

async function getAllProjects() {
    fetch('/projects/')
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

const projForm = document.getElementById("proj-form");
if (projForm) projForm.addEventListener('submit', createProject);

function createProject(e) {
    e.preventDefault();

    fetchData('/projects/create', {
        projectName: document.getElementById("projectName").value,
        projectText: document.getElementById("projectText").value,
        projectGitHub: document.getElementById("projectGitHub").value,
        projectLikes: 0,
        projectComments: 0,
        projectTags: document.getElementById("projectTags").value
    }, "POST")
        .then((data) => {
            if (!data.message) {
                window.location.href = "projects.html";
            }
        })
}