exports.updateBook = {

    route: 'PATCH /books/:bookId',

    title: 'Update book',

    model: 'Book:update',

    roles: [],

    params: {
        bookId: 'string'
    },

    query: {},

    body: {
        name: 'string',
        year: 'int'
    },

    headers: {},

    cookies: {},

    middleware: ['auth'],

    responses: [200, 403, 404, 422],

    tags: [],

};
