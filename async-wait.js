console.log('Before');
// Async and Await approach
async function displayCommitss() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commit = await getCommits(repos[0]);
        console.log(commit);
    } catch (err) {
        console.log('Error', err.message);
    }
}
displayCommitss();
console.log('After');

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