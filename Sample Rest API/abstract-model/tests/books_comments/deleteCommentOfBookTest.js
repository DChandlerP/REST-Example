exports.deleteCommentOfBook = {

    title: 'Delete comment of book',

    users: ['spock'],

    db: {
        books: ['#Book1'],
    },

    requests: [{
        call: 'deleteCommentOfBook',
        params: {
            bookId: 'book_1',
            commentId: 'comment_1'
        },
        query: {},
        body: {},
        headers: {},
        cookies: {}
    }],

}
