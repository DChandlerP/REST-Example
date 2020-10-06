exports['CONTROLLER updateUserProfile'] = (db, responses, _) => {

    return async function updateUserProfile(id, body, userId, log) {
        // users can update only their own profile
        if (id !== userId) throw responses.FORBIDDEN;

        let modification = {
            $set: {
                firstName: body.firstName,
                lastName: body.lastName,
            },
        };

        let result = await db.users.updateOne({ _id: id }, modification);

        if (result.matchedCount === 0) throw responses.NOT_FOUND;

        return responses.OK;
    }

}
