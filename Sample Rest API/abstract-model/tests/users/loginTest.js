exports.login = {

    title: 'Login user',

    users: [''],

    db: {
        users: ['#Spock']
    },

    requests: [{
        call: "login",
        body: {
            username: "spock",
            password: "Pass!123"
        },
    }],

}
