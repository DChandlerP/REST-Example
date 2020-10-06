const authTokens = {};

async function getAuthToken({ username, agent }) {
    if (!authTokens[username]) {
        let resp = await agent.post('/login')
            .send({ username, password: username })
            .timeout(1000)
            .catch(err => {
                console.error(err);
                throw err;
            });

        if (resp.statusCode !== 200) throw new Error('Expected successful login!');

        authTokens[username] = resp.body.token;
    }
    return authTokens[username];
}

module.exports = {
    getAuthToken, // this will be needed if real auth is configured (mockAuth: false)
};
