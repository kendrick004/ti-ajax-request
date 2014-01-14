exports.xhrRequest = function(args){
    var xhr = Ti.Network.createHTTPClient();
	    xhr.onerror = function(e) {
	    	if(args.hasOwnProperty('onError')) { 
	    		if(typeof args.onError == 'function') {
	    			var err = {
	    				message: e.error,
	    				status : this.status,
	    				statText : this.statusText,
	    				e: e
	    			};
	    			args.onError(err);
	    		}
	    	}
	    };
	    xhr.onload = function(){
			    if (this.readyState == 4) {
			           if(args.hasOwnProperty('callback')) {  
				            if(typeof args.callback == 'function') {  
				                args.callback(JSON.parse(this.responseText));  
				            }else {   
				                Titanium.UI.createAlertDialog({
						    		message: 'Request :  Invalid callback function',
						    		title: "Callback Error" 
						    	});  
				            }  
				        }
			    }
	    };
	    xhr.open( args.hasOwnProperty('method') ? args.method : 'GET', args.url);
	    xhr.setRequestHeader("Content-Type","application/json");
	    xhr.setTimeout(args.hasOwnProperty('timeout') ? args.timeout : 0);
	    xhr.send( args.hasOwnProperty('params') ? JSON.stringify(args.params) : {});
};