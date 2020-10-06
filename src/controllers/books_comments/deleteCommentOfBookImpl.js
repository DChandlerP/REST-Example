// A factory for the controller 'deleteCommentOfBook', using dependency injection of singletons: db, types, responses, _.
exports['CONTROLLER deleteCommentOfBook'] = (db, types, responses, _) => {

    // The controller will be invoked for each request, with the request-scoped dependencies as arguments.
    return async function deleteCommentOfBook(bookId, commentId, userId, log) {
        // check if the book and the comment exist
        if (!await db.books.exists({ _id: bookId, 'comments._id': commentId })) throw responses.NOT_FOUND;

        let modification = {
            $pull: {
                comments: {
                    _id: commentId,
                    author: userId,
                }
            }
        };

        let result = await db.books.updateOne({ _id: bookId }, modification);

        if (result.matchedCount === 0) throw responses.FORBIDDEN;

        return responses.OK;
    }

}
