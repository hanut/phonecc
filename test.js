var phonecc = require('./index.js');

phonecc.split("918126723680",(err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})