// A factory for the controller 'addBook', using dependency injection of singletons: db, types, responses, _.
exports['CONTROLLER addBook'] = (db, types, responses, _) => {

    // The controller will be invoked for each request, with the request-scoped dependencies as arguments.
    return async function addBook(body, userId, log) {
        let book = types.Book(body, { defaults: true });
        book.author = userId;

        let result = await db.books.insertOne(book);

        return { _id: result.insertedId };
    }

}
