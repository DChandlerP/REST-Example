exports.getBook = {

    title: 'Get book',

    users: ['spock'],

    db: {
        books: ['#Book1'],
    },

    requests: [{
        call: 'getBook',
        params: {
            bookId: 'book_1'
        },
        query: {},
        body: {},
        headers: {},
        cookies: {}
    }],

}
