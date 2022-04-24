const comments = [
    {
        commentId: 1,
        commentText: "This is a comment!",
        commentDate: "2020-01-01",
        userId: 1,
        projectId: 1
    }
]

let getAllComments = () => comments;

module.exports = { getAllComments };