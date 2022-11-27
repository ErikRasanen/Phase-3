# Group Activities

## Activity 1
- What is Password Hashing? [Link 1, Link 2](#links)
A: Password hashing is defined as putting a password through a hashing algorithm (bcrypt, SHA, etc) to turn plaintext into an unintelligible series of numbers and letters.

- How does the Rainbow Table Attack work? [Link 3, Link 4](#links)
A: It works by doing a cryptanalysis very quickly and effectively computing hashes of the large set of available strings. A rainbow table attack is a password cracking method that uses a special table (a “rainbow table”) to crack the password hashes in a database.


- What Is a Password Salt and How it increases security of Password Hashing? [Link 2](#links)
A: To add an extra layer of security adding random text values, called Salt to the user password to make it different every time.




## Activity 2
- What is bcrypt?
It is based on the Blowfish cipher. Bcrypt (Blowfish crypt) is the name of the hashing function used by the UNIX password system.


- What are saltRounds?
saltRounds represent the cost or work factor of the bcrypt hashing process.


- Discuss in groups how the following snippets work? [Link 5](#links)

1. Auto-generate a salt and a hash

```js
const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainTextPassword1 = "DFGh5546*%^__90";
bcrypt
  .hash(plainTextPassword1, saltRounds)
  .then(hash => {
    console.log(`Hash: ${hash}`);
    // Store hash in your password DB.
  })
  .catch(err => console.error(err.message));
```

2. Validating a Password with a Hash

```js
const bcrypt = require("bcrypt"); // we include the bcrypt module
const saltRounds = 10; // we set the saltRounds value.
const plainTextPassword1 = "DFGh5546*%^__90"; // we hard-code a user password
bcrypt
  .hash(plainTextPassword1, saltRounds) // we pass bcrypt.hash()
  .then(hash => {
    console.log(`Hash: ${hash}`); // we simply console.log the hash
    // Store hash in your password DB.
  })
  .catch(err => console.error(err.message)); // error handling shows error message in console

```



## links
[1](https://www.okta.com/blog/2019/03/what-are-salted-passwords-and-password-hashing/)
[2](https://www.studytonight.com/post/what-is-a-password-salt-and-how-it-increases-security-of-password-hashing)
[3](https://www.geeksforgeeks.org/understanding-rainbow-table-attack/)
[4](https://www.beyondidentity.com/glossary/rainbow-table-attack)
[5](https://auth0.com/blog/hashing-in-action-understanding-bcrypt/)
[6](https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/)