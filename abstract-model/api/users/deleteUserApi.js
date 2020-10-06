exports.deleteUser = {

    route: 'DELETE /users/:id',

    title: 'Delete user',

    model: 'User:remove',

    params: {
        id: "string"
    },

    middleware: ["auth"],

    responses: [200, 403, 404],

    tags: ['users'],

};
