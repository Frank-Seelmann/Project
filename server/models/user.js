const users = [
    {
        userId: 1,
        userName: "John Doe",
        userEmail: "jdoe@email.com",
        userPassword: "password",
        birthDate: "01/01/2000",
        userIsAdmin: true,
    },
    {
        userId: 2,
        userName: "Jane Doe",
        userEmail: "janedoe@email.com",
        userPassword: "password2",
        birthDate: "02/02/2000",
        userIsAdmin: false,
    },
]

//function to get all users
let getUsers = () => users;

async function login(username, password) {
    const user = users.filter((u) => u.userName === username);
    if(!user) throw Error("User not found");
    if(user[0].userPassword !== password) throw Error("Wrong password");

    this.currentUser = user[0];
    return user[0];
};

//export to use in other files
module.exports = { getUsers, login };