const comments = [
    {
        commentId: 1,
        commentText: "This is a comment!",
        commentDate: "2020-01-01",
        userId: 1,
        projectId: 1
    }
]

const con = require('./db_connect');

async function createTable() {
    let sql = ` CREATE TABLE IF NOT EXISTS comments (
        commentId INT NOT NULL AUTO_INCREMENT,
        commentText VARCHAR(255),
        commentDate VARCHAR(255),
        userId INT NOT NULL,
        projectId INT NOT NULL,
        CONSTRAINT comment_pk PRIMARY KEY (commentId)
    );`;
    await con.query(sql);
}
createTable();

//function to get all comments
let getAllComments = async() => {
    const sql = "SELECT * FROM comments";
    return await con.query(sql);
}

async function createComment(comment) {
    const sql = `INSERT INTO comments (commentText, commentDate, userId, projectId) VALUES ("${comment.commentText}", "${comment.commentDate}", "${comment.userId}", "${comment.projectId}")`;
    await con.query(sql);
    const newComment = await getComment(comment.commentId);
    return newComment[0];
};

async function deleteComment(commentId) {
    const sql = `DELETE FROM comments WHERE commentId = ${commentId}`;
    await con.query(sql);
    const deletedComment = await getComment(commentId);
    return deletedComment[0];
};


async function getComment(commentId) {
    const sql = `SELECT * FROM comments WHERE commentId = ${commentId}`;
    let c = await con.query(sql);
    return c;
}

module.exports = { getAllComments, createComment, deleteComment, getComment };