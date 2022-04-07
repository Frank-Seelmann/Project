class User {
    constructor(id, userName, email, password, birthDate, isAdmin) {
        this.userId = id;
        this.userName = userName;
        this.userEmail = email;
        this.password = password;
        this.birthDate = birthDate;
        this.isAdmin = isAdmin;
    }

    //getters
    getUserId() { return this.userId };
    getUserName() { return this.userName };
    getIsAdmin() { return this.isAdmin };
    getUserEmail() { return this.userEmail };
    getPassword() { return this.password };
    getBirthDate() { return this.birthDate };

    //setters
    setUserId(id) { this.userId = id };
    setUserName(userName) { this.userName = userName };
    setUserEmail(email) { this.userEmail = email };
    setPassword(password) { this.password = password };
    setIsAdmin(isAdmin) { this.isAdmin = isAdmin };
    setBirthDate(birthDate) { this.birthDate = birthDate };
}

class Profile {
    constructor(profileId, userId, dateCreated, lastLoginDate, profilePicture) {
        this.profileId = profileId;
        this.userId = userId;
        this.profileDateCreated = dateCreated;
        this.lastLoginDate = lastLoginDate;
        this.profilePicture = profilePicture;
    }

    //getters
    getProfileId() { return this.profileId };
    getUserId() { return this.userId };
    getProfileDateCreated() { return this.profileDateCreated };
    getLastLoginDate() { return this.lastLoginDate };
    getProfilePicture() { return this.profilePicture };

    //setters
    setProfileId(id) { this.profileId = id };
    setUserId(userId) { this.userId = userId };
    setProfileDateCreated(dateCreated) { this.profileDateCreated = dateCreated };
    setLastLoginDate(lastLoginDate) { this.lastLoginDate = lastLoginDate };
    setProfilePicture(profilePicture) { this.profilePicture = profilePicture };
}

class Project {
    constructor(projectId, projectName, projectGitHub, projectThumbnail, projectText, likes, comments, tags) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.projectGitHub = projectGitHub;
        this.projectThumbnail = projectThumbnail;
        this.projectText = projectText;
        this.projectLikes = likes;
        this.projectComments = comments;
        this.projectTags = tags;
    }

    //getters
    getProjectId() { return this.projectId };
    getProjectName() { return this.projectName };
    getProjectGitHub() { return this.projectGitHub };
    getProjectThumbnail() { return this.projectThumbnail };
    getProjectText() { return this.projectText };
    getProjectLikes() { return this.projectLikes };
    getProjectComments() { return this.projectComments };
    getProjectTags() { return this.projectTags };

    //setters
    setProjectId(id) { this.projectId = id };
    setProjectName(name) { this.projectName = name };
    setProjectGitHub(gitHub) { this.projectGitHub = gitHub };
    setProjectThumbnail(thumbnail) { this.projectThumbnail = thumbnail };
    setProjectText(text) { this.projectText = text };
    setProjectLikes(likes) { this.projectLikes = likes };
    setProjectComments(comments) { this.projectComments = comments };
    setProjectTags(tags) { this.projectTags = tags };
}

class Comment {
    constructor(commentId, commentText, commentDate, userId, projectId) {
        this.commentId = commentId;
        this.commentText = commentText;
        this.commentDate = commentDate;
        this.userId = userId;
        this.projectId = projectId;
    }

    //getters
    getCommentId() { return this.commentId };
    getCommentText() { return this.commentText };
    getCommentDate() { return this.commentDate };
    getUserId() { return this.userId };
    getProjectId() { return this.projectId };

    //setters
    setCommentId(id) { this.commentId = id };
    setCommentText(text) { this.commentText = text };
    setCommentDate(date) { this.commentDate = date };
    setUserId(userId) { this.userId = userId };
    setProjectId(projectId) { this.projectId = projectId };
}

const user1 = new User(1, "John Doe", "jdoe@email.com", "password", true);

const profile1 = new Profile(1, 1, "2020-01-01", "2020-01-01", "https://th.bing.com/th/id/OIP.E4gCagrjAkQ5td5qjSc3rwHaE7?pid=ImgDet&rs=1");

const comment1 = new Comment(1, "This is a comment!", "2020-01-01", 1, 1);

const project1 = new Project(1, "Project 1", "github link", "", "This is the first project", 2, [comment1], ["tag1", "tag2"]);


let form = document.getElementById("signup");
form.addEventListener('submit', addUser);

function addUser(e) {
    e.preventDefault();

    newUser = new User(
        2,
        document.getElementById("userName").value,
        document.getElementById("email").value,
        document.getElementById("pswd").value,
        document.getElementById("birthDate").value,
        false
    );

    console.log(newUser);
}