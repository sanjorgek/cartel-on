// The set of parrots registered in our app.
module.exports = {
    attributes: {
	name: {
	    type: 'string',
	    required: true
	},
	userName: {
	    type: 'string',
	    required: true
	},
	weapons:{
	    collection:'Weapon'
	}
    }
}
