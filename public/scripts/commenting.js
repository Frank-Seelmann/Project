import { fetchData, getCurrentUser } from './main.js'

const commentForm = document.getElementById("comment-form");
if(commentForm) commentForm.addEventListener('submit', createComment);

