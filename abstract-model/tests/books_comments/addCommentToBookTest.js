exports.addCommentToBook = {

    title: 'Add new comment to book',

    users: ['spock'],

    db: {
        books: ['#Book1'],
    },

    requests: [{
        call: 'addCommentToBook',
        params: {
            bookId: 'book_1'
        },
        query: {},
        body: {
            content: 'the content'
        },
        headers: {},
        cookies: {}
    }],

}
