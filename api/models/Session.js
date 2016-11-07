module.exports = {
    attributes: {
	logIn: {
	    type: 'string',
	    required: true
	},
	logOut: {
	    type: 'string',
	    required: true
	},
	user:{
	    model:'User'
	}
    }
}
