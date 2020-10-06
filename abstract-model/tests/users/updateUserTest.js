exports.updateUserProfile = {

    title: 'Update user profile',

    users: ["spock"],

    db: {
        users: ['#Spock'],
    },

    requests: [{
        call: "updateUserProfile",
        params: {
            id: "spock"
        },
        body: {
            firstName: "the firstName",
            lastName: "the lastName"
        },
    }],

}
