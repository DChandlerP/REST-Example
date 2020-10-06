exports['CONTROLLER login'] = (db, passwords, auth, responses, _) => {

    return async function login(body) {
        const user = await db.users.findOne({ _id: body.username });
        if (!user) throw responses.NOT_FOUND;

        const match = await passwords.compareWithHash(body.password, user.passwordHash);
        if (!match) throw responses.FORBIDDEN;

        const userData = {
            id: user._id,
            email: user.email,
        };

        const token = auth.signToken({ user: userData });

        return { token };
    }

}
