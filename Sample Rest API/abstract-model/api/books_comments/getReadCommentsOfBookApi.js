exports.getReadCommentsOfBook = {

    route: 'GET /books/:bookId/comments/:commentId',

    title: 'Read comments',

    model: 'Book#comments:read',

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
