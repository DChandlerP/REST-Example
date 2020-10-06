exports['CONTROLLER deleteUser'] = (db, responses, _) => {

    return async function deleteUser(id, userId, log) {
        // users can delete only their own profile
        if (id !== userId) throw responses.FORBIDDEN;

        let result = await db.users.deleteOne({ _id: id });

        if (result.deletedCount === 0) throw responses.NOT_FOUND;

        return responses.OK;
    }

}
