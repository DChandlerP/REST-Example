// A factory for the controller 'listCommentsOfBook', using dependency injection of singletons: db, types, responses, _.
exports['CONTROLLER listCommentsOfBook'] = (db, types, responses, _) => {

    // The controller will be invoked for each request, with the request-scoped dependencies as arguments.
    return async function listCommentsOfBook(bookId, userId, log) {
        let query = { _id: bookId };

        let options = {
            projection: { comments: 1 },
        };

        let rawBook = await db.books.findOne(query, options);
        if (!rawBook) throw responses.NOT_FOUND;

        let book = types.Book(rawBook);

        return book.comments;
    }

}
