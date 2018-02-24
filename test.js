var phonecc = require('./index.js');

const pno = '8800506845'
// const pno = '+917016907360'
const defaultCC = '91'



// phonecc.split(pno, (err, result) => {
//     if (err) {
//         console.log('Error in split')
//         console.log(err)
//     } else {
//         console.log('split result')
//         console.log(result)
//     }
// })
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
