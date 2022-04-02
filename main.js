class User {
    constructor(id, userName, email, password, isAdmin) {
        this.userId = id;
        this.userName = userName;
        this.userEmail = email;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    //getters
    getUserId() { return this.userId };
    getUserName() { return this.userName };
    getIsAdmin() { return this.isAdmin };
    getUserEmail() { return this.userEmail };
    getPassword() { return this.password };

    //setters
    setUserId(id) { this.userId = id };
    setUserName(userName) { this.userName = userName };
    setUserEmail(email) { this.userEmail = email };
    setPassword(password) { this.password = password };
    setIsAdmin(isAdmin) { this.isAdmin = isAdmin };
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
    constructor(projectId, projectText, likes, comments, tags) {
        this.projectId = projectId;
        this.projectText = projectText;
        this.projectLikes = likes;
        this.projectComments = comments;
        this.projectTags = tags;
    }

    //getters
    getProjectId() { return this.projectId };
    getProjectText() { return this.projectText };
    getProjectLikes() { return this.projectLikes };
    getProjectComments() { return this.projectComments };
    getProjectTags() { return this.projectTags };

    //setters
    setProjectId(id) { this.projectId = id };
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