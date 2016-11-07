module.exports = {
    attributes: {
	roomName: {
	    type: 'string',
	    required: true
	},
	users: {
	    collection:'User'
	}
    }
}
