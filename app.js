// Initialize GitHub
const github = new GitHub;

// Initialize UI
const ui = new UI;

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
                ui.showAlert('User Not Found!', 'alert alert-danger');
            } else {
                // Show profile
                ui.showProfile(data.profile);
            }
        })
    } else {
        // Clear profile
        ui.clearProfile();
    }
})

