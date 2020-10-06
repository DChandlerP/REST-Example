exports.getUserProfile = {

    title: 'Get user profile',

    users: ["spock"],

    db: {
        users: ['#Spock'],
    },

    requests: [{
        call: "getUserProfile",
        params: {
            id: "spock"
        },
    }],

}
