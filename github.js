class GitHub {
    constructor() {
        this.client_id = '6f555fa1e68b5bed0d9d';
        this.client_secret = '4d1bf02d89784b90d00ae9d93df97b8b6884e70d';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        

        return  { 
            profile, 
            repos 
        };
    }
}