// THIS FILE WAS AUTO-GENERATED

class User {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // _id : string pkey autogen
        if (withDefaults || util._has(data._id)) {
            this._id = util._has(data._id) ? types.string(data._id, opts, err, prefix + '_id') : null;
        }

        // email : email
        if (withDefaults || util._has(data.email)) {
            this.email = util._has(data.email) ? types.email(data.email, opts, err, prefix + 'email') : err.no(prefix + 'email');
        }

        // passwordHash : string
        if (withDefaults || util._has(data.passwordHash)) {
            this.passwordHash = util._has(data.passwordHash) ? types.string(data.passwordHash, opts, err, prefix + 'passwordHash') : err.no(prefix + 'passwordHash');
        }

        // firstName : string
        if (withDefaults || util._has(data.firstName)) {
            this.firstName = util._has(data.firstName) ? types.string(data.firstName, opts, err, prefix + 'firstName') : err.no(prefix + 'firstName');
        }

        // lastName : string
        if (withDefaults || util._has(data.lastName)) {
            this.lastName = util._has(data.lastName) ? types.string(data.lastName, opts, err, prefix + 'lastName') : err.no(prefix + 'lastName');
        }
    }
}

class Book {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // _id : string pkey autogen
        if (withDefaults || util._has(data._id)) {
            this._id = util._has(data._id) ? types.string(data._id, opts, err, prefix + '_id') : null;
        }

        // name : string
        if (withDefaults || util._has(data.name)) {
            this.name = util._has(data.name) ? types.string(data.name, opts, err, prefix + 'name') : err.no(prefix + 'name');
        }

        // year : int
        if (withDefaults || util._has(data.year)) {
            this.year = util._has(data.year) ? types.int(data.year, opts, err, prefix + 'year') : err.no(prefix + 'year');
        }

        // author : userid owner
        if (withDefaults || util._has(data.author)) {
            this.author = util._has(data.author) ? types.userid(data.author, opts, err, prefix + 'author') : err.no(prefix + 'author');
        }

        // comments : Comment[] embedded
        if (withDefaults || util._has(data.comments)) {
            this.comments = util._coll(types.Comment, data.comments, opts, err, prefix + 'comments.');
        }
    }
}

class Comment {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // _id : string pkey autogen
        if (withDefaults || util._has(data._id)) {
            this._id = util._has(data._id) ? types.string(data._id, opts, err, prefix + '_id') : null;
        }

        // author : userid owner
        if (withDefaults || util._has(data.author)) {
            this.author = util._has(data.author) ? types.userid(data.author, opts, err, prefix + 'author') : err.no(prefix + 'author');
        }

        // content : string
        if (withDefaults || util._has(data.content)) {
            this.content = util._has(data.content) ? types.string(data.content, opts, err, prefix + 'content') : err.no(prefix + 'content');
        }
    }
}

class DeleteUserParams {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // id : string
        if (withDefaults || util._has(data.id)) {
            this.id = util._has(data.id) ? types.string(data.id, opts, err, prefix + 'id') : err.no(prefix + 'id');
        }
    }
}

class GetUserProfileParams {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // id : string
        if (withDefaults || util._has(data.id)) {
            this.id = util._has(data.id) ? types.string(data.id, opts, err, prefix + 'id') : err.no(prefix + 'id');
        }
    }
}

class AddUserBody {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // username : string
        if (withDefaults || util._has(data.username)) {
            this.username = util._has(data.username) ? types.string(data.username, opts, err, prefix + 'username') : err.no(prefix + 'username');
        }

        // password : password
        if (withDefaults || util._has(data.password)) {
            this.password = util._has(data.password) ? types.password(data.password, opts, err, prefix + 'password') : err.no(prefix + 'password');
        }

        // email : email
        if (withDefaults || util._has(data.email)) {
            this.email = util._has(data.email) ? types.email(data.email, opts, err, prefix + 'email') : err.no(prefix + 'email');
        }

        // firstName : string
        if (withDefaults || util._has(data.firstName)) {
            this.firstName = util._has(data.firstName) ? types.string(data.firstName, opts, err, prefix + 'firstName') : err.no(prefix + 'firstName');
        }

        // lastName : string
        if (withDefaults || util._has(data.lastName)) {
            this.lastName = util._has(data.lastName) ? types.string(data.lastName, opts, err, prefix + 'lastName') : err.no(prefix + 'lastName');
        }
    }
}

class LoginBody {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // username : string
        if (withDefaults || util._has(data.username)) {
            this.username = util._has(data.username) ? types.string(data.username, opts, err, prefix + 'username') : err.no(prefix + 'username');
        }

        // password : password
        if (withDefaults || util._has(data.password)) {
            this.password = util._has(data.password) ? types.password(data.password, opts, err, prefix + 'password') : err.no(prefix + 'password');
        }
    }
}

class UpdateUserProfileParams {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // id : string
        if (withDefaults || util._has(data.id)) {
            this.id = util._has(data.id) ? types.string(data.id, opts, err, prefix + 'id') : err.no(prefix + 'id');
        }
    }
}

class UpdateUserProfileBody {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // firstName : string
        if (withDefaults || util._has(data.firstName)) {
            this.firstName = util._has(data.firstName) ? types.string(data.firstName, opts, err, prefix + 'firstName') : err.no(prefix + 'firstName');
        }

        // lastName : string
        if (withDefaults || util._has(data.lastName)) {
            this.lastName = util._has(data.lastName) ? types.string(data.lastName, opts, err, prefix + 'lastName') : err.no(prefix + 'lastName');
        }
    }
}

class AddBookBody {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // name : string
        if (withDefaults || util._has(data.name)) {
            this.name = util._has(data.name) ? types.string(data.name, opts, err, prefix + 'name') : err.no(prefix + 'name');
        }

        // year : int
        if (withDefaults || util._has(data.year)) {
            this.year = util._has(data.year) ? types.int(data.year, opts, err, prefix + 'year') : err.no(prefix + 'year');
        }
    }
}

class UpdateBookParams {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // bookId : string
        if (withDefaults || util._has(data.bookId)) {
            this.bookId = util._has(data.bookId) ? types.string(data.bookId, opts, err, prefix + 'bookId') : err.no(prefix + 'bookId');
        }
    }
}

class UpdateBookBody {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // name : string
        if (withDefaults || util._has(data.name)) {
            this.name = util._has(data.name) ? types.string(data.name, opts, err, prefix + 'name') : err.no(prefix + 'name');
        }

        // year : int
        if (withDefaults || util._has(data.year)) {
            this.year = util._has(data.year) ? types.int(data.year, opts, err, prefix + 'year') : err.no(prefix + 'year');
        }
    }
}

class DeleteBookParams {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // bookId : string
        if (withDefaults || util._has(data.bookId)) {
            this.bookId = util._has(data.bookId) ? types.string(data.bookId, opts, err, prefix + 'bookId') : err.no(prefix + 'bookId');
        }
    }
}

class GetBookParams {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // bookId : string
        if (withDefaults || util._has(data.bookId)) {
            this.bookId = util._has(data.bookId) ? types.string(data.bookId, opts, err, prefix + 'bookId') : err.no(prefix + 'bookId');
        }
    }
}

class AddCommentToBookParams {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // bookId : string
        if (withDefaults || util._has(data.bookId)) {
            this.bookId = util._has(data.bookId) ? types.string(data.bookId, opts, err, prefix + 'bookId') : err.no(prefix + 'bookId');
        }
    }
}

class AddCommentToBookBody {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // content : string
        if (withDefaults || util._has(data.content)) {
            this.content = util._has(data.content) ? types.string(data.content, opts, err, prefix + 'content') : err.no(prefix + 'content');
        }
    }
}

class DeleteCommentOfBookParams {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // bookId : string
        if (withDefaults || util._has(data.bookId)) {
            this.bookId = util._has(data.bookId) ? types.string(data.bookId, opts, err, prefix + 'bookId') : err.no(prefix + 'bookId');
        }

        // commentId : string
        if (withDefaults || util._has(data.commentId)) {
            this.commentId = util._has(data.commentId) ? types.string(data.commentId, opts, err, prefix + 'commentId') : err.no(prefix + 'commentId');
        }
    }
}

class UpdateCommentOfBookParams {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // bookId : string
        if (withDefaults || util._has(data.bookId)) {
            this.bookId = util._has(data.bookId) ? types.string(data.bookId, opts, err, prefix + 'bookId') : err.no(prefix + 'bookId');
        }

        // commentId : string
        if (withDefaults || util._has(data.commentId)) {
            this.commentId = util._has(data.commentId) ? types.string(data.commentId, opts, err, prefix + 'commentId') : err.no(prefix + 'commentId');
        }
    }
}

class UpdateCommentOfBookBody {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // content : string
        if (withDefaults || util._has(data.content)) {
            this.content = util._has(data.content) ? types.string(data.content, opts, err, prefix + 'content') : err.no(prefix + 'content');
        }
    }
}

class ListCommentsOfBookParams {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // bookId : string
        if (withDefaults || util._has(data.bookId)) {
            this.bookId = util._has(data.bookId) ? types.string(data.bookId, opts, err, prefix + 'bookId') : err.no(prefix + 'bookId');
        }
    }
}

class GetReadCommentsOfBookParams {
    constructor({ data = {}, prefix = '', types, opts, err, util }) {
        const withDefaults = opts && opts.defaults;

        // bookId : string
        if (withDefaults || util._has(data.bookId)) {
            this.bookId = util._has(data.bookId) ? types.string(data.bookId, opts, err, prefix + 'bookId') : err.no(prefix + 'bookId');
        }
    }
}

exports['SINGLETON typedefs'] = {
    User,
    Book,
    Comment,
    DeleteUserParams,
    GetUserProfileParams,
    AddUserBody,
    LoginBody,
    UpdateUserProfileParams,
    UpdateUserProfileBody,
    AddBookBody,
    UpdateBookParams,
    UpdateBookBody,
    DeleteBookParams,
    GetBookParams,
    AddCommentToBookParams,
    AddCommentToBookBody,
    DeleteCommentOfBookParams,
    UpdateCommentOfBookParams,
    UpdateCommentOfBookBody,
    ListCommentsOfBookParams,
    GetReadCommentsOfBookParams,
};
