const users = [
    {
        userId: 1,
        userName: "John Doe",
        userEmail: "jdoe@email.com", 
        password: "password",
        birthDate: "01/01/2000",
        isAdmin: true
    },
    {
        userId: 2,
        userName: "Jane Doe",
        userEmail: "janedoe@email.com",
        password: "password2",
        birthDate: "02/02/2000",
        userIsAdmin: false,
    },
]

//function to get all users
let getUsers = () => users;

async function login(username, password) {
    const user = users.filter((u) => u.userName === username);
    if (!user) throw Error("User not found");
    if (user[0].userPassword !== password) throw Error("Wrong password");

    this.currentUser = user[0];
    return user[0];
};

function register(user) {
    const u = userExists(user.username);
    if (u.length > 0) throw Error('Username in use!');

    const newUser = {
        userId: users[users.length - 1].userId + 1,
        userName: user.username,
        password: user.password
    };
    users.push(newUser);
    return newUser;
}

function deleteUser(userId) {
    let i = users.map((user) => user.userId).indexOf(userId);
    users.splice(i, 1);
    console.log(users);
}

function userExists(username) {
    return users.filter((u) => u.userName === username);
}

//export to use in other files
module.exports = { getUsers, login, register, deleteUser };