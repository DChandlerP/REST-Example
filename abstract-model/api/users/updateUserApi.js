exports.updateUserProfile = {

    route: 'PATCH /users/:id',

    title: 'Update user profile',

    model: 'User:update',

    params: {
        id: "string"
    },

    body: {
        firstName: "string",
        lastName: "string"
    },

    middleware: ["auth"],

    responses: [200, 403, 404, 422],

    tags: ['users'],

};
