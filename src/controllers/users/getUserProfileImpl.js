exports['CONTROLLER getUserProfile'] = (db, responses, _) => {

    return async function getUserProfile(id, log) {
        let profile = await db.users.findOne({ _id: id });

        delete profile.passwordHash;

        if (!profile) throw responses.NOT_FOUND;

        return profile;
    }

}
