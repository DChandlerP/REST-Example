exports.listCommentsOfBook = {

    route: 'GET /books/:bookId/comments',

    title: 'List comments of book',

    model: 'Book#comments:list',

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
