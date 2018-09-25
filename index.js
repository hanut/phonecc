var cc = require('./cc-map.json')

module.exports = {

  split: function (phone) {
    try{
      if(!phone) {
        throw new Error('Invalid or missing phone number parameter')
      }
      phone = "" + phone
      let foundCC = null
      if (phone[0] !== "+") {
        phone = "+" + phone
      }
      for (let len = 1; len < 5; len++) {
        let code = phone.substr(0,len)
        if(cc[code]) {
          foundCC = code
        }
      }
      if(foundCC === null){
        if (!cc) {
          throw new Error('No country code detected in phone number. Please run the number through cleanNumber or cleanNumberSync before splitting')
        } else {
          foundCC = defaultCC
        }
      }
      phone = phone.substr(foundCC.length, phone.length - foundCC.length);
      return {cc: foundCC.substr(1, foundCC.length - 1), phone: phone}
    } catch (error) {
      throw error
    }
  }
}
