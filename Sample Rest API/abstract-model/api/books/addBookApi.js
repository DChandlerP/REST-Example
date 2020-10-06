exports.addBook = {

    route: 'POST /books',

    title: 'Create book',

    model: 'Book:add',

    roles: [],

    params: {},

    query: {},

    body: {
        name: 'string',
        year: 'int'
    },

    headers: {},

    cookies: {},

    middleware: ['auth'],

    responses: [200, 403, 422],

    tags: [],

};
