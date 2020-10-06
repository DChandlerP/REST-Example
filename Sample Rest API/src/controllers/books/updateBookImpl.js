// A factory for the controller 'updateBook', using dependency injection of singletons: db, types, responses, _.
exports['CONTROLLER updateBook'] = (db, types, responses, _) => {

    // The controller will be invoked for each request, with the request-scoped dependencies as arguments.
    return async function updateBook(bookId, body, userId, log) {
        let condition = {
            author: userId,
        };

        let modification = {
            $set: {
                name: body.name,
                year: body.year,
            },
        };

        await db.books.updateById(bookId, modification, condition);

        return responses.OK;
    }

}
