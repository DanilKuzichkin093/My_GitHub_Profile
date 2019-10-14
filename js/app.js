const github = new GitHub;
const ui = new UI;
github.getUser("DanilKuzichkin093")
        .then(data => {
            if(data.profile.message === 'Not Found') {
                ui.showAlert('User not found!', 'alert alert-danger')
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
