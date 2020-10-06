exports.deleteCommentOfBook = {

    route: 'DELETE /books/:bookId/comments/:commentId',

    title: 'Delete comment of book',

    model: 'Book#comments:remove',

    roles: [],

    params: {
        bookId: 'string',
        commentId: 'string'
    },

    query: {},

    headers: {},

    cookies: {},

    middleware: ['auth'],

    responses: [200, 403, 404],

    tags: [],

};
