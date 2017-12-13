var cc = require('./cc.json');

module.exports = {
  split: function (phone, cb) {
    try{
      var countryCode = "";
      if (phone[0] != "+") {
        phone = "+"+phone;
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
    } catch (error) {
      cb(error);
    }
  },

  cleanNumber: function(phone, cc, cb) {
    if(phone.match(/^[+]+[0-9]/)){
      phone = phone.replace(/^[+]+/, "+");
      if(phone.length>6 && phone.length<18){
        console.log("number : "+phone)
        return cb(null, phone, true)
      } else {
        return cb("Invalid number")
      }
    } else {
      if(phone.length>6 && phone.length<18) {
        phone = phone.replace(/[+]/, "");
        phone = phone.replace(/^[0]*/, "");
        return cb(null, phone, false);
      } else {
        return cb("Invalid number")
      }
    }
  }
}
