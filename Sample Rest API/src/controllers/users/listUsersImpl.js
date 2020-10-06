exports['CONTROLLER listUsers'] = (db) => {

    return async function listUsers(page, log) {
        let query = {};

        let options = {
            projection: {
                _id: 1,
                firstName: 1,
                lastName: 1,
            },
            // orderBy: [['_id', 1]],
            skip: page.skip,
            limit: page.limit,
        };

        return await db.users.find(query, options).toArray();
    }

}
