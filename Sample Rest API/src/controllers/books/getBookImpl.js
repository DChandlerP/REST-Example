// A factory for the controller 'getBook', using dependency injection of singletons: db, types, responses, _.
exports['CONTROLLER getBook'] = (db, types, responses, _) => {

    // The controller will be invoked for each request, with the request-scoped dependencies as arguments.
    return async function getBook(bookId, userId, log) {
        let filter = {
            _id: bookId,
            author: userId,
        };

        let data = await db.books.getOne(filter);
        let book = types.Book(data);

        return book;
    }

}
