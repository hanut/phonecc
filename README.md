# phonecc
A tiny helper to split phone numbers into country codes and phone numbers

## Motivation
Dealing with phone numbers is a pain. And yet its something we deal with on a near daily basis.
We created this project to help all those unfortunate folk who have to deal with the tedium of
getting country codes and playing with them in phone numbers. Its mostly a WIP but we are trying our
best to find time to regularly update and improve the module.

## Installation
To install the library use
```sh
$ npm i phonecc --save
```
To install the library and save it as a dependency in package.json use
```sh
$ npm i phonecc --save
```
To install the library globally use
```sh
$ npm i -g phonecc
```

## Usage

~~~~
var phonecc = require('phonecc')

// Usage with callbacks
phonecc.split(phone, (error, result) => {
    if (error) {
        //TODO: Handle errors here
        return;
    } else {
        //TODO: Handle the successful split of numbers
        //Also handle blank cc returns incase no country
        //code existed in the number
        console.log(result);
    }
});

// Usage with return value
var result = phonecc.splitSync(phone)
if (result) {
  // Result contains an object of structure {cc: string, phone: string}
  console.log(result)
} else {
  console.log('error processing phone number')
}
~~~~

## Credits
Hanut Singh Gusain
Juggernaut451

