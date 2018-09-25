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
console.time('parseLoop')
for (index in contactsList) {
  var phone = contactsList[index].phone
  try {
    var result
    result = phonecc.split(contactsList[index].phone)
    tosend.push({name: contactsList[index].name, phone: result.phone, cc: result.cc})
  } catch (e) {
    tosend.push({name: contactsList[index].name, phone: contactsList[index].phone, cc: 'NOT FOUND'})
    // console.log(e)
  }
}
console.timeEnd('parseLoop')

console.log('Processed Results')
console.log(tosend)
console.log('-'.repeat(100))

var result = phonecc.split(pno)
if (result) {
  console.log('splitSync result')
  console.log(result)
} else {
  console.log('Error in splitSync')
}