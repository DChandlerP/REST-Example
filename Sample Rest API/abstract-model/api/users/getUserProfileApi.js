exports.getUserProfile = {

    route: 'GET /users/:id',

    title: 'Get user profile',

    model: 'User:getProfile',

    params: {
        id: "string"
    },

    middleware: ["auth"],

    responses: [200, 403, 404],

    tags: ['users'],

};
