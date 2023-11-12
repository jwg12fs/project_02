const mysql = require('mysql');



const db = mysql.createPool({
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: '',
	database: 'my_db_01'
});

db.getConnection(function(err){
	if (err) throw err;
	console.log('Connected to mysql database!');
});
module.exports = db;