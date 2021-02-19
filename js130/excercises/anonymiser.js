"use strict";
//Anonymizer
let Account = (function () {
  let privateData = {};
  let returnedObject = {
    reanonymize(password) {
      if (password === privateData.password) {
        this.displayName = anonymaze();

        return true;
      } else {
        return 'Invalid password';
      }
    },
    init(email, password, firstName, lastName) {
      privateData = { email, password, firstName, lastName };
      this.displayName = anonymaze(firstName, lastName, email, password);

      return this;
    }
  };

  function anonymaze() {

    returnedObject.firstName = function (password) {
      if (password === privateData.password) {
        return privateData.firstName;
      } else {
        return 'Invalid password';
      }
    };
    returnedObject.lastName = function (password) {
      if (password === privateData.password) {
        return privateData.lastName;
      } else {
        return 'Invalid password';
      }
    };
    returnedObject.password = function (password) {
      if (password === privateData.password) {
        return privateData.password;
      } else {
        return 'Invalid password';
      }
    };
    returnedObject.email = function (password) {
      if (password === privateData.password) {
        return privateData.email;
      } else {
        return 'Invalid password';
      }
    };

    returnedObject.resetPassword = function (currentPassword, newPassword) {
      if (currentPassword === privateData.password) {
        privateData.password = newPassword;
        return true;
      } else {
        return 'Invalid password';
      }
    };

    return (function () {
      let sequence = '';
      let someChar = 'abcdefghijklmnoprstuvwxyz1234567890';

      for (let index = 0; index < 16; index++) {
        let randomIndex = Math.floor(Math.random() * someChar.length);
        sequence += someChar[randomIndex];
      }
      return sequence;
    })();
  }
  return returnedObject;
})();


//TEST CASES:
let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'

console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));   // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')); // logs true
let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));
// //                         // returns true
console.log(displayName === fooBar.displayName);   // logs false


//extended


// console.log('here');
// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');
// console.log(fooBar.reanonymize('abc'))
// returns true
// console.log(displayName === fooBar.displayName);
// logs false

//let bazQux = Object.create(Account).init('baz@qux.com','123456','baz','qux');
// console.log(fooBar.firstName('abc'));
// logs 'Invalid Password'
// console.log(fooBar.email('abc'));
// logs 'Invalid Password'