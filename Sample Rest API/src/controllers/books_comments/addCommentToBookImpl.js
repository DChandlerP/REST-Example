// A factory for the controller 'addCommentToBook', using dependency injection of singletons: db, types, responses, _.
exports['CONTROLLER addCommentToBook'] = (db, types, responses, _) => {

    // The controller will be invoked for each request, with the request-scoped dependencies as arguments.
    return async function addCommentToBook(bookId, userId, body, log) {
        // check if the book exists
        if (!await db.books.exists({ _id: bookId })) throw responses.NOT_FOUND;

        let comment = types.Comment(body, { defaults: true });
        comment._id = db.ObjectId();
        comment.author = userId;

        let modification = {
            $push: {
                comments: comment,
            },
        };

        let result = await db.books.updateOne({ _id: bookId }, modification);

        if (result.matchedCount === 0) throw responses.NOT_FOUND;

        return { _id: comment._id };
    }

}
