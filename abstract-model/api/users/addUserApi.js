exports.addUser = {

    route: 'POST /users',

    title: 'Create user',

    model: 'User:add',

    body: {
        username: "string",
        password: "password",
        email: "email",
        firstName: "string",
        lastName: "string"
    },

    middleware: [],

    responses: [200, 403, 422],

    tags: ['users'],

};
