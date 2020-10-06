exports.listCommentsOfBook = {

    title: 'List comments of book',

    users: ['spock'],

    db: {
        books: ['#Book1'],
    },

    requests: [{
        call: 'listCommentsOfBook',
        params: {
            bookId: 'book_1'
        },
        query: {},
        body: {},
        headers: {},
        cookies: {}
    }],

}
