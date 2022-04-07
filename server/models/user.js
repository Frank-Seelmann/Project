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


//export to use in other files
module.exports = { getUsers };