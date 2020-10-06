exports.listUsers = {

    route: 'GET /users',

    title: 'List users',

    model: 'User:list',

    query: {},

    middleware: ["auth"],

    responses: [200, 403],

    tags: ['users'],

};
