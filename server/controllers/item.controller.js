// DELETE THIS LINE

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
db.connect((err) => {
  if (err) console.log(err);
  else console.log("db is working");
});
const selectAll = (id) => {
  try {
    const requ = `SELECT * from posts WHERE user_id=${id}`;
    return db.promise().query(requ);
  } catch (error) {
    console.log(error);
  }
};
const add = (title, user_id, description, images) => {
  try {
    const requ = `INSERT INTO posts (title, user_id,description, images) 
        VALUES ("${title}",${user_id},"${description}","${images}");`;
    return db.promise().query(requ);
  } catch (error) {
    console.log(error);
  }
};
const dele = (id, iduser) => {
  try {
    const requ = `DELETE FROM posts WHERE (idpo=${id} AND user_id=${iduser})`;
    return db.promise().query(requ);
  } catch (error) {
    console.log(error);
  }
};
const modfy = (id, iduser,title, description) => {
  try {
    const requ = `UPDATE posts SET title="${title}" ,description="${description}" WHERE  (idpo=${id} AND user_id=${iduser})`;
    return db.promise().query(requ);
  } catch (error) {
    console.log(error);
  }
};
const getOne= (email,password)=>{
    try {
      const quer=`SELECT * from user WHERE email="${email}" AND password= "${password}"`
      return  db.promise().query(quer)
    } catch (error) {
      console.log('Password or Email is worring ')
    }
  }
  const adduser=async(username,email,password)=>{
    try {
      const quer=`INSERT INTO user (username,email,password) VALUES ("${username}","${email}","${password}")`
      return await db.promise().query(quer)
      
    } catch (error) {
      console.log(error)
    }
  }
  const favu = (id, iduser) => {
    try {
      const requ = `UPDATE posts SET favioret=1 WHERE  (idpo=${id} AND user_id=${iduser})`;
      return db.promise().query(requ);
    } catch (error) {
      console.log(error);
    }
  };
module.exports = { selectAll, add, dele, modfy,getOne,adduser,favu };
