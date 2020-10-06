// A factory for the controller 'deleteBook', using dependency injection of singletons: db, types, responses, _.
exports['CONTROLLER deleteBook'] = (db, types, responses, _) => {

    // The controller will be invoked for each request, with the request-scoped dependencies as arguments.
    return async function deleteBook(bookId, userId, log) {
        let criteria = {
            author: userId,
        };

        await db.books.deleteById(bookId, criteria);

        return responses.OK;
    }

}
