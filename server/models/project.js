con = require('./db_connect');

function createTable() {
    let sql = ` CREATE TABLE IF NOT EXISTS projects (
        projectId INT NOT NULL AUTO_INCREMENT,
        projectName VARCHAR(255),
        projectGitHub VARCHAR(255),
        projectThumbnail VARCHAR(6000),
        projectText VARCHAR(6000),
        projectLikes INT,
        projectCommentIds VARCHAR(255),
        projectTags VARCHAR(255),
        CONSTRAINT project_pk PRIMARY KEY (projectId)
    );`;
    con.query(sql);
}
createTable();

let getAllProjects = async () => {
    const sql = "SELECT * FROM projects";
    return await con.query(sql);
};

async function createProject(project) {
    const sql = `INSERT INTO projects (projectName, projectGitHub, projectThumbnail, projectText, projectLikes, projectCommentIds, projectTags) VALUES ("${project.projectName}", "${project.projectGitHub}", "${project.projectThumbnail}", "${project.projectText}", "${project.projectLikes}", "${project.projectCommentIds}", "${project.projectTags}")`;
    await con.query(sql);
    const newProject = await getProject(project.projectName);
    return newProject[0];
};

async function getProject(projectName) {
    const sql = `SELECT * FROM projects WHERE projectName = "${projectName}"`;
    let p = await con.query(sql);
    return p;
};

async function updateProject(project) {
    const sql = `UPDATE projects SET projectName = "${project.projectName}", projectGitHub = "${project.projectGitHub}", projectThumbnail = "${project.projectThumbnail}", projectText = "${project.projectText}", projectLikes = "${project.projectLikes}", projectCommentIds = "${project.projectCommentIds}", projectTags = "${project.projectTags}" WHERE projectId = ${project.projectId}`;
    await con.query(sql);
    const updatedProject = await getProject(project.projectName);
    return updatedProject[0];
};

async function deleteProject(projectId) {
    const sql = `DELETE FROM projects WHERE projectId = ${projectId}`;
    await con.query(sql);
};

async function getProjectsByTag(tag) {
    const sql = `SELECT * FROM projects WHERE projectTags LIKE "%${tag}%"`;
    let p = await con.query(sql);
    return p;
};

module.exports = { getAllProjects, createProject, getProject, updateProject, deleteProject, getProjectsByTag };