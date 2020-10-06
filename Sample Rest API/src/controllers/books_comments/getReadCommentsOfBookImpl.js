// A factory for the controller 'getReadCommentsOfBook', using dependency injection of singletons: db, types, responses, _.
exports['CONTROLLER getReadCommentsOfBook'] = (db, types, responses, _) => {

    // The controller will be invoked for each request, with the request-scoped dependencies as arguments.
    return async function getReadCommentsOfBook(bookId, userId, log) {
        let options = {
            projection: { comments: 1 },
        };

        let rawBook = await db.books.findOne({ _id: bookId }, options);
        if (!rawBook) throw responses.NOT_FOUND;

        let book = types.Comment(rawBook);

        return _.filter(book.comments, comment => true); // TODO customize filter
    }

}
