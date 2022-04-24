const projects = [
    {
        projectId: 1,
        projectName: "Project 1",
        projectGitHub: "github link",
        projectThumbnail: "",
        projectText: "This is the first project",
        projectLikes: 2,
        projectCommentIds: [1],
        projectTags: ["tag1", "tag2"]
    },
    {
        projectId: 2,
        projectName: "Project 2",
        projectGitHub: "github link",
        projectThumbnail: "",
        projectText: "This is the second project",
        projectLikes: 2,
        projectCommentIds: [1],
        projectTags: ["tag1", "tag3"]
    }
]

let getAllProjects = () => projects;

module.exports = { getAllProjects };