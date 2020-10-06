exports.deleteBook = {

    route: 'DELETE /books/:bookId',

    title: 'Delete book',

    model: 'Book:remove',

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
