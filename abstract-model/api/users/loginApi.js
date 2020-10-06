exports.login = {

    route: 'POST /login',

    title: 'Login user',

    body: {
        username: 'string',
        password: 'password',
    },

    middleware: [],

    responses: [200, 403, 404, 500],

    tags: ['users'],

};
