exports['CONTROLLER addUser'] = (db, passwords, types) => {

    return async function addUser(body) {
        let user = types.User(body);

        user._id = body.username;
        user.passwordHash = await passwords.hash(body.password);

        let result = await db.users.insertOne(user);

        return { _id: result.insertedId };
    }

}
