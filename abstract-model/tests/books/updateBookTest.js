exports.updateBook = {

    title: 'Update book',

    users: ['spock'],

    db: {
        books: ['#Book1'],
    },

    requests: [{
        call: 'updateBook',
        params: {
            bookId: 'book_1'
        },
        query: {},
        body: {
            name: 'the name',
            year: 2021
        },
        headers: {},
        cookies: {}
    }],

}
