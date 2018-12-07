console.log('Before');
// getUser(1, (user) => {
//     console.log('User', user);
//     getRepositories(user.gitHubUsername, (repos) => {
//         console.log('Repositories:', repos);
//         getCommits(repos, (commit) => {
//             console.log(commit[1]);
//         });
//     });
// });
const p = getUser(1);
// p.then(user => console.log(user));
// console.log('After');
getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[1]))
    .then(commits => console.log("Commits", commits))
    .catch(err => console.log('Error he bhai', err.message));

function getUser(id) {
    return new Promise((resolve, reject) => {
        // Fill async method here...
        setTimeout(() => {
            console.log('Selecting data from databse...');
            resolve({ id: id, gitHubUsername: "Mahesh" });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling From GitHub API...");
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });

}

function getCommits(repos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling From GitHub API...");
            resolve(['Initial Commit', 'First Commit']);
        }, 2000);
    });
}