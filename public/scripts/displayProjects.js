let displayProjectHTML = document.getElementById("displayProject");

//displayProjects;

//function displayProjects() {
let section =
    `
    <img class="card-img-top" src="${project1.getProjectThumbnail()}" alt="Card image cap">
        <div class="card-body">
            <h2>${project1.getProjectName()}</h2>
            <p>${project1.getProjectText()}</p>
            <p>${project1.getProjectGitHub()}</p>
            <p>${project1.getProjectLikes()} likes</p>
            <p>${project1.getProjectComments()} comments</p>
            <p>${project1.getProjectTags()}</p>
            <form action="#">
                <textarea name="comment" id="comment" rows="2" cols="30"></textarea>
                <br>
                <label for="comment"><button type="button" class="btn btn-primary" id="newComment">
                <i class="fa-solid fa-comment"></i> Add comment</button></label>
            </form>
            
        </div>
    `
displayProjectHTML.innerHTML += section;