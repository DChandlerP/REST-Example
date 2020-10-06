exports.deleteUser = {

    title: 'Delete user',

    users: ["spock"],

    db: {
        users: ['#Spock'],
    },

    requests: [{
        call: "deleteUser",
        params: {
            id: "spock"
        },
    }],

}
