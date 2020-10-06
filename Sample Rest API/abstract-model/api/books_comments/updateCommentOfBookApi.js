exports.updateCommentOfBook = {

    route: 'PATCH /books/:bookId/comments/:commentId',

    title: 'Update comment of book',

    model: 'Book#comments:update',

    roles: [],

    params: {
        bookId: 'string',
        commentId: 'string'
    },

    query: {},

    body: {
        content: 'string'
    },

    headers: {},

    cookies: {},

    middleware: ['auth'],

    responses: [200, 403, 404, 422],

    tags: [],

};
