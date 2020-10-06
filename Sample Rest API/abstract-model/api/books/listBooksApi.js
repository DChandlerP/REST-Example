exports.listBooks = {

    route: 'GET /books',

    title: 'List books',

    model: 'Book:list',

    roles: [],

    params: {},

    query: {},

    headers: {},

    cookies: {},

    middleware: ['auth'],

    responses: [200, 403],

    tags: [],

};
