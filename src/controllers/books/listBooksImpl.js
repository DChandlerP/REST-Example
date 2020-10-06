// A factory for the controller 'listBooks', using dependency injection of singletons: db, types, responses, _.
exports['CONTROLLER listBooks'] = (db, types, responses, _) => {

    // The controller will be invoked for each request, with the request-scoped dependencies as arguments.
    return async function listBooks(userId, page, log) {
        let query = {};

        let options = {
            projection: { _id: 1 },
            // orderBy: [['_id', 1]],
            skip: page.skip,
            limit: page.limit,
        };

        return await db.books.find(query, options).toArray();
    }

}
