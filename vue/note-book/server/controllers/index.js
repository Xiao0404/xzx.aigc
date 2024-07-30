// 打造一个可以链接数据库的方法
const mysql = require('mysql2/promise');
const {database} = require('../config/index.js');

// 创建链接池 
const poll = mysql.createPool({
    host:database.HOST,
    user:database.USERNAME,
    password:database.PASSWORD,
    database:database.DATABASE,
    port:database.PORT
});

// 可以链接数据库的方法
const allService = {
   async query (sql){
   try{
         // 通过连接池来创建连接
    const conn = await poll.getConnection()
    // 对该连接执行某些操作
    // rows 是执行成功返回的结果
     const [rows,err] = await conn.query(sql)
     
     // 释放连接
     poll.releaseConnection(conn);

     return Promise.resolve(rows)
   }catch(error){
      return Promise.reject(error)

    }
    }
}

 // 登录
const userLogin = (username,password) => {
        const _sql = `select * from users where username = "${username}" and password = "${password}"`
        return  allService.query(_sql)
}

// 查找账号
const userFind = (username) =>{
    const _sql = `select * from users where username = "${username}"`
    return  allService.query(_sql)
}


const userRegister = (values) =>{
    const _sql = `insert into users (username,password,nickname) values ("${values.username}","${values.password}","${values.nickname}")`
    return  allService.query(_sql)
}

// 根据分类查找数据
const findNoteListByType = (note_type, id) => {
    const _sql = `select * from note where note_type="${note_type}" and userId="${id}"`;
    return allService.query(_sql);
};


module.exports = {
    userLogin,
    userFind,
    userRegister,
    findNoteListByType
}