exports.Book = {

    uri: '/books',

    fields: {
        _id: 'string pkey autogen',
        name: 'string',
        year: 'int',
        author: 'userid owner',
        comments: 'Comment[] embedded'
    },

    UID: '2b1f94e'
}
