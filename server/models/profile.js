const con = require('./db_connect');

async function createTable() {
    let sql = ` CREATE TABLE IF NOT EXISTS profiles (
        profileId INT NOT NULL AUTO_INCREMENT,
        userId INT NOT NULL,
        dateCreated VARCHAR(255),
        lastLoginDate VARCHAR(255),
        profilePicture BLOB,
        CONSTRAINT profile_pk PRIMARY KEY (profileId)
    );`;
    await con.query(sql);
}
createTable();

//function to get all profiles
let getProfiles = async() => {
    const sql = "SELECT * FROM profiles";
    return await con.query(sql);
};

async function createProfile(user) {
    const sql = `INSERT INTO profiles (userId, dateCreated, lastLoginDate, profilePicture) VALUES ("${user.userId}", "${user.dateCreated}", "${user.lastLoginDate}", "${user.profilePicture}")`;
    await con.query(sql);
    const newProfile = await getProfile(user.userId);
    return newProfile[0];
}

async function getProfile(userId) {
    const sql = `SELECT * FROM profiles WHERE userId = ${userId}`;
    let p = await con.query(sql);
    return p;
}

async function updateLastLogin(userId) {
    const sql = `UPDATE profiles SET lastLoginDate = NOW() WHERE userId = ${userId}`;
    await con.query(sql);
    const updatedProfile = await getProfile(userId);
    return updatedProfile[0];
}

module.exports = { getProfiles, createProfile, getProfile, updateLastLogin };