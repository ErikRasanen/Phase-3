# Group Activities

## Activity 1

- Change the route handler functions in `src/notes.js` into async functions as shown below. Compare your attempt with the code in `solution/notes-sol.js` file.  

- Chaining using Promises
```js
function test() {
    return func1()
    .then(v1 => {
        return func2(v1);
    })
    .then(v2 => {
        return func3(v1, v2);
    });
}
```
- Chaining using Async/Await

```js
async function test() {
    let v1 = await func1();
    let v2 = await func2(v1); 
    return await func3(v1, v2);  
}
``` 

## Activity 2: Deploy backend-auth to the cloud

- Step 1: Create a MongoDB Database named `merndb2`, using the Atlas UI [Link 1](#Links).
- Step 2: Extract `backend-auth.zip`, turn the folder into Git repositories and push it to a remote repository [Link 2](#Links).
- Step 3: update the `.env` with the link to your database
- Deploy the backend Application to Render [Link 3, Link 4](#Links).
- In `actions-auth.rest`, 
  - update `@baseurl` with the link to your backend 
  - update `@token` with the token  you received after you signup/login

> note: you can make a private repo for the backend and deploy only the gh-pages branch to the front end.


## Links
- [Link 1](https://www.mongodb.com/basics/create-databases)
- [Link 2](https://www.delftstack.com/howto/git/make-a-folder-a-git-repository/)
- [Link 3](https://www.freecodecamp.org/news/how-to-deploy-nodejs-application-with-render/)
- [Link 4](https://render.com/docs/deploy-node-express-app)

- [FSO](https://fullstackopen.com/en/part4/testing_the_backend#async-await)
- [async await](https://afteracademy.com/blog/migrating-from-promise-chains-to-async-await)
- [Routing](https://expressjs.com/en/guide/routing.html)