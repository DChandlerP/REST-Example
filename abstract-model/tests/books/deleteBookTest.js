exports.deleteBook = {

    title: 'Delete book',

    users: ['spock'],

    db: {
        books: ['#Book1'],
    },

    requests: [{
        call: 'deleteBook',
        params: {
            bookId: 'book_1'
        },
        query: {},
        body: {},
        headers: {},
        cookies: {}
    }],

}
