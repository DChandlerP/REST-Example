exports.addCommentToBook = {

    route: 'POST /books/:bookId/comments',

    title: 'Add new comment to book',

    model: 'Book#comments:add',

    roles: [],

    params: {
        bookId: 'string'
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
