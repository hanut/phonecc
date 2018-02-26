var cc = require('./cc.json');

module.exports = {
  split: function (phone, ...params) {
    if (params.length < 1) {
      throw new Error('Invalid number of parameters to split function. split() requires a minimum of 2 parameters')
    }
    var callback = (params.length === 1) ? params[0] : params[1]
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
        return callback("Not Found")
      }
      console.log("CC length %s \nPhone length : %s",foundCC.length,phone.length)
      phone = phone.substr(foundCC.length,phone.length-foundCC.length);
      return callback(null, {cc:foundCC,phone:phone});
    } catch (error) {
      callback(error);
    }
  },

  splitSync: function (phone, defaultCC) {
    try{
      var countryCode = ""
      if (phone[0] != "+") {
        phone = "+"+phone
      }
      countryCode = phone.substr(0, 5);
      var foundCC = null;
      cc.forEach((data)=>{
        if(countryCode.indexOf(data.dial_code) !== -1){
          foundCC = data.dial_code
        }
      });
      // console.log(foundCC)
      if(foundCC === null){
        if (!cc) {
          throw new Error('No country code detected in phone number. Please run the number through cleanNumber or cleanNumberSync before splitting')
        } else {
          foundCC = defaultCC
        }
      }
      phone = phone.substr(foundCC.length, phone.length - foundCC.length);
      return {cc: foundCC, phone: phone}
    } catch (error) {
      throw error
    }
  },

  cleanNumber: function(phone, cc, cb) {
    if(phone.match(/^[+]+[0-9]/)){
      phone = phone.replace(/^[+]+/, "+");
      if(phone.length > 6 && phone.length < 18){
        return cb(null, phone, true)
      } else {
        return cb("Invalid phone number")
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
  },

  cleanNumberSync: function(phone) {
    if(phone.match(/^[+]+[0-9]/)){
      phone = phone.replace(/^[+]+/, "+");
      if(phone.length > 6 && phone.length < 18){
        phone = phone.replace('(', "").replace(')', "")
        return {phone: phone, hasCC: true}
      } else {
        throw new Error("Invalid phone number")
        return false
      }
    } else {
      if(phone.length > 6 && phone.length < 18) {
        phone = phone.replace(/[+]/, "")
        phone = phone.replace(/^[0]*/, "")
        phone = phone.replace('(', "").replace(')', "")
        return {phone: phone, hasCC: false}
      } else {
        throw new Error("Invalid phone number")
        return false
      }
    }
  }
}
