// Init
const github = new GitHub;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {

    // Get input text
    const userText = e.target.value;

    if(userText !== '') {
        // Make HTTP call
        github.getUser(userText).then(data => {
            console.log(data);
            if(data.profile.message === 'Not Found') {
                // Show alert
                console.log('User Not Found!');
            } else {
                // Show profile
            }
        })
    } else {
        // Clear profile
    }
})

