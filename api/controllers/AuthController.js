module.exports = {
    login: function (req, res) {
	if(User.findOne(req.userId).exec(
	    function (err, user){
		if(err){
		    return res.badRequest();
		}
		console.log(user.userName);
	    });
	
    },
    logout: function (req, res) {
	if(User.findOne(req.userId).exec(
	    function(err, user){
		
	    }
	);
    }
};
