exports.getReadCommentsOfBook = {

    title: 'Read comments',

    users: ['spock'],

    db: {
        books: ['#Book1'],
    },

    requests: [{
        call: 'getReadCommentsOfBook',
        params: {
            bookId: 'book_1'
        },
        query: {},
        body: {},
        headers: {},
        cookies: {}
    }],

}
