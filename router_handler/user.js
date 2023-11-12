





module.exports.reguser = (req, res)=>{
	const userinfo = req.body;
	console.log(userinfo);
	res.send('reguser OK');
}

module.exports.login = (req, res)=>{
	res.send('login OK');
}