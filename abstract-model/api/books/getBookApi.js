exports.getBook = {

    route: 'GET /books/:bookId',

    title: 'Get book',

    model: 'Book:read',

    roles: [],

    params: {
        bookId: 'string'
    },

    query: {},

    headers: {},

    cookies: {},

    middleware: ['auth'],

    responses: [200, 403, 404],

    tags: [],

};
