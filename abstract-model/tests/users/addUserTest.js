exports.addUser = {

    title: 'Create user',

    users: [''],

    db: {
        users: ['#Spock'],
    },

    requests: [{
        call: "addUser",
        body: {
            username: 'kirk',
            password: "abc",
            email: "kirk@example.com",
            firstName: "James",
            lastName: "Kirk"
        },
    }],

}
