const con = require('./db_connect');

async function createTable() {
  let sql = ` CREATE TABLE IF NOT EXISTS users (
    userId INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL UNIQUE,
    userEmail VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    birthDate VARCHAR(255),
    isAdmin BOOLEAN,
    CONSTRAINT user_pk PRIMARY KEY (userId)
  );`;
  await con.query(sql);
}
createTable();

//function to get all users
let getUsers = async() => {
  const sql = "SELECT * FROM users";
  return await con.query(sql);
};

async function login(userName, password) {
  const user = await userExists(userName);
  if(!user[0]) throw Error('User not found')
  if(user[0].password !== password) throw Error("Password is incorrect");

  return user[0];
}

async function register(user) {
  console.log(user.birthDate)
  const u = userExists(user.userName);
  if (u.length > 0) throw Error('Username already exists')

  const sql = `INSERT INTO users (userName, userEmail, password, birthDate, isAdmin) VALUES ("${user.userName}", "${user.email}", "${user.password}", "${user.birthDate}", ${user.isAdmin})`;

  const insert = await con.query(sql);
  const newUser = await getUser(user);

  console.log(newUser)

  return newUser[0];
}

async function deleteUser(userId) {
  const sql = `DELETE FROM users WHERE userId = ${userId}`;
  await con.query(sql);
  sql = `DELETE FROM profiles WHERE userId = ${userId}`;
  await con.query(sql);
}

async function userExists(userName) {
  const sql = `SELECT * FROM users WHERE userName = "${userName}"`;
  let u = await con.query(sql);
  console.log(u)
  return u;
}

async function getUser(user) {
  let sql;
  if(user.userId) {
    sql = `SELECT * FROM users WHERE userId = ${user.userId}`;
  } else {
    sql = `SELECT * FROM users WHERE userName = "${user.userName}"`;
  }
  return await con.query(sql);
}

async function editUser(user) {
  const sql = `UPDATE users SET userName = "${user.userName}" WHERE userId = ${user.userId}`;

  const update = await con.query(sql);
  const newUser = await getUser(user);
  return newUser[0];
}

//export to use in other files
module.exports = { getUsers, login, register, deleteUser, userExists, getUser, editUser };