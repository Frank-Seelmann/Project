const con = require('./db_connect');

async function createTable() {
    let sql = ` CREATE TABLE IF NOT EXISTS profiles (
        profileId INT NOT NULL AUTO_INCREMENT,
        userId INT NOT NULL,
        dateCreated VARCHAR(255),
        lastLoginDate VARCHAR(255),
        profilePicture VARCHAR(5000),
        CONSTRAINT profile_pk PRIMARY KEY (profileId)
    );`;
    await con.query(sql);
}
createTable();

//function to get all profiles
let getAllProfiles = async () => {
    const sql = "SELECT * FROM profiles";
    return await con.query(sql);
};

async function createProfile(user) {
    const sql = `INSERT INTO profiles (userId, dateCreated, lastLoginDate, profilePicture) VALUES ("${user.userId}", "${user.dateCreated}", "${user.lastLoginDate}", "${user.profilePicture}")`;
    await con.query(sql);
    const newProfile = await getProfile(user.userId);
    console.log("Created: ", newProfile)
    return newProfile[0];
}

async function getProfile(userId) {
    const sql = `SELECT * FROM profiles WHERE userId = ${userId}`;
    let p = await con.query(sql);
    return p;
}

async function updateLastLogin(userId) {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const sql = `UPDATE profiles SET lastLoginDate = "${today}" WHERE userId = ${userId}`;
    await con.query(sql);
    const updatedProfile = await getProfile(userId);
    return updatedProfile[0];
}

module.exports = { getAllProfiles, createProfile, getProfile, updateLastLogin };