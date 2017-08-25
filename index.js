var cc = require('./cc.json');

module.exports = {
    split: function (phone, cb) {
        try{
	        var countryCode = "";
	        if (phone[0] != "+") {
				phone += "+";
			}
            countryCode = phone.substr(0, 5);
	        var foundCC = null;
	        cc.forEach((data)=>{
				if(countryCode.indexOf(data.dial_code) !== -1){
					foundCC = data.dial_code;
				}
	        });
	        if(foundCC==null){
	        	return cb("Not Found")
	        }
	        console.log("CC length %s \nPhone length : %s",foundCC.length,phone.length)
			phone = phone.substr(foundCC.length,phone.length-foundCC.length);
	        return cb(null, {cc:foundCC,phone:phone});
        }catch(e){
        	cb(err);
        }
    }
}