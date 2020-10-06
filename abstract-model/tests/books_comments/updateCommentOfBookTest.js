exports.updateCommentOfBook = {

    title: 'Update comment of book',

    users: ['spock'],

    db: {
        books: ['#Book1'],
    },

    requests: [{
        call: 'updateCommentOfBook',
        params: {
            bookId: 'book_1',
            commentId: 'comment_1'
        },
        query: {},
        body: {
            content: 'the content'
        },
        headers: {},
        cookies: {}
    }],

}
