 console.log("Before");
 // getUser(1, (user) => {
 //     console.log(user);
 //     getRepository(user.gitHubUsername, (repos) => {
 //         console.log(`Repose are ${repos[2]}`);
 //         getCommits(repos[0], (commits) => {
 //             console.log(`Comiits are ${commits[2]}`);
 //         });
 //     });
 // });  // Callback hell issue
 getUser(1, displayUser);
 console.log("After");

 // Resolve Callback hell Problem.
 function displayUser(user) {
     console.log("Github users are :" + user.gitHubUsername);
     getRepositories(user.gitHubUsername, displayRepository);
 }

 function displayRepository(repos) {
     console.log("Repositories :" + repos[1]);
     getCommits(repos[1], displayCommits);
 }

 function displayCommits(Commits) {
     console.log("My Commit : " + Commits[2]);
 }

 function getUser(id, callback) {
     setTimeout(() => {
         console.log("Selecting some database value...");
         callback({ id: id, gitHubUsername: "Maheshpotedevex" });
     }, 2000);
 }

 function getRepositories(username, callback) {
     setTimeout(() => {
         console.log("Getting Repository from api...");
         callback(["To-Do-APP", "Express-Demo", "Social-APP"]);
     }, 2000);
 }

 function getCommits(repo, callback) {
     setTimeout(() => {
         console.log("Getting Commits from api...");
         callback(["Initial Commit", "First Commit's", "Fixed-Major bug"]);
     }, 2000);
 }