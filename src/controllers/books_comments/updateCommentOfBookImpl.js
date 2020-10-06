// A factory for the controller 'updateCommentOfBook', using dependency injection of singletons: db, types, responses, _.
exports['CONTROLLER updateCommentOfBook'] = (db, types, responses, _) => {

    // The controller will be invoked for each request, with the request-scoped dependencies as arguments.
    return async function updateCommentOfBook(bookId, commentId, body, userId, log) {
        // check if the book and the comment exist
        if (!await db.books.exists({ _id: bookId, 'comments._id': commentId })) throw responses.NOT_FOUND;

        let filter = {
            _id: bookId,
            comments: {
                $elemMatch: {
                    _id: commentId,
                    author: userId,
                }
            },
        };

        let modification = {
            $set: {
                'comments.$.content': body.content,
            },
        };

        let result = await db.books.updateOne(filter, modification);

        if (result.matchedCount === 0) throw responses.FORBIDDEN; // didn't match criteria, or was concurrently deleted

        // log.info('Updated comment of book', { bookId, commentId });

        return responses.OK;
    }

}
