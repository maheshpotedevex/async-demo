console.log('Before');
getUser(1, (user) => {
    console.log('User', user);
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repositories:', repos);
        getCommits(repos, (commit) => {
            console.log(commit[1]);
        });
    });
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Selecting data from databse...');
        callback({ id: id, gitHubUsername: "Mahesh" });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log("Calling From GitHub API...");
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(repos, callback) {
    setTimeout(() => {
        console.log("Calling From GitHub API...");
        callback(['Initial Commit', 'First Commit']);
    }, 2000);
}