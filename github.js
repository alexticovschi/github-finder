class GitHub {
    constructor() {
        this.client_id = '6f555fa1e68b5bed0d9d';
        this.client_secret = '4d1bf02d89784b90d00ae9d93df97b8b6884e70d';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return  { profile };
    }
}