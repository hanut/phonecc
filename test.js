var phonecc = require('./index.js');
var contactsList = require('./contacts.json')
// const pno = '8800506845'
const pno = '+917016907360'
const defaultCC = '91'

var tosend = []

process.stdout.write('\033c');
console.log('Default Country Code :', defaultCC)
console.log('-'.repeat(100))
console.log('Processing ' + contactsList.length + ' phone numbers...')
console.log(contactsList)
for (index in contactsList) {
  var phone = contactsList[index].phone
  try {
    var cleanedNumber = phonecc.cleanNumberSync(phone)
    // console.log(cleanedNumber)
    var result
    if (cleanedNumber.hasCC) {
      result = phonecc.splitSync(cleanedNumber.phone)
    } else {
      result = phonecc.splitSync(cleanedNumber.phone, defaultCC)
    }
    // console.log(result.phone)
    tosend.push({name: contactsList[index].name, phone: result.phone, cc: result.cc})
  } catch (e) {
    // console.log(e)
  }
}

console.log('Processed Results')
console.log(tosend)
console.log('-'.repeat(100))

phonecc.split(pno, (err, result) => {
    if (err) {
        console.log('Error in split')
        console.log(err)
    } else {
        console.log('split result')
        console.log(result)
    }
})
var cleanNumber = phonecc.cleanNumberSync(pno);
if (cleanNumber) {
  console.log('cleanNumberSync result')
  console.log(cleanNumber)
  if (cleanNumber.hasCC) {
    var result = phonecc.splitSync(pno)
    if (result) {
      console.log('splitSync result')
      console.log(result)
    } else {
      console.log('Error in splitSync')
    }
  } else {
    var result = phonecc.splitSync('+'+defaultCC+pno)
    if (result) {
      console.log('splitSync result')
      console.log(result)
    } else {
      console.log('Error in splitSync')
    }
  }
} else {
  console.log('Error in cleanNumberSync')
}
