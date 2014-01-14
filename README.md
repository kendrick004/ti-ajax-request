ti-ajax-request
===============
var args = {
	method : "POST",
	url : END_POINT + "/login",
	params : {
		user : 'sampleuser',
		pwd : 'samplepass'
	},
	callback : function(data) {
		alert(JSON.stringify(data));
	},
	onError : function(err) {
		alert(JSON.stringify(err));
	}
};
var xhr = require("/requests/ServerRequest").xhrRequest(args);