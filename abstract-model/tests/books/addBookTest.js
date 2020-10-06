exports.addBook = {

    title: 'Create book',

    users: ['spock'],

    db: {
        books: ['#Book1'],
    },

    requests: [{
        call: 'addBook',
        params: {},
        query: {},
        body: {
            name: 'the name',
            year: 2021
        },
        headers: {},
        cookies: {}
    }],

}
