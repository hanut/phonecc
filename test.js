var phonecc = require('./index.js');

phonecc.split("918126723680",(err, result) => {
    if (err) {
        console.log('Error in split')
        console.log(err);
    } else {
        console.log('split result')
        console.log(result);
    }
})

var result = phonecc.splitSync("918126723680")
if (result) {
  console.log('splitSync result')
  console.log(result)
} else {
  console.log('Error in splitSync')
}