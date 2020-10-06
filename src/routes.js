// THIS FILE WAS AUTO-GENERATED

exports['API deleteUser'] = {
    name: 'deleteUser',
    route: 'DELETE /users/:id',
    verb: 'DELETE',
    path: '/users/:id',
    title: 'Delete user',
    description: '',
    params: {
        id: 'string'
    },
    query: {},
    body: {},
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 404],
    middleware: ['auth'],
    tags: ['users'],
    typeNames: {
        params: 'DeleteUserParams'
    },
    model: 'User:remove'
};

exports['API listUsers'] = {
    name: 'listUsers',
    route: 'GET /users',
    verb: 'GET',
    path: '/users',
    title: 'List users',
    description: '',
    params: {},
    query: {},
    body: {},
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403],
    middleware: ['auth'],
    tags: ['users'],
    typeNames: {},
    model: 'User:list'
};

exports['API getUserProfile'] = {
    name: 'getUserProfile',
    route: 'GET /users/:id',
    verb: 'GET',
    path: '/users/:id',
    title: 'Get user profile',
    description: '',
    params: {
        id: 'string'
    },
    query: {},
    body: {},
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 404],
    middleware: ['auth'],
    tags: ['users'],
    typeNames: {
        params: 'GetUserProfileParams'
    },
    model: 'User:getProfile'
};

exports['API addUser'] = {
    name: 'addUser',
    route: 'POST /users',
    verb: 'POST',
    path: '/users',
    title: 'Create user',
    description: '',
    params: {},
    query: {},
    body: {
        username: 'string',
        password: 'password',
        email: 'email',
        firstName: 'string',
        lastName: 'string'
    },
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 422],
    middleware: [],
    tags: ['users'],
    typeNames: {
        body: 'AddUserBody'
    },
    model: 'User:add'
};

exports['API login'] = {
    name: 'login',
    route: 'POST /login',
    verb: 'POST',
    path: '/login',
    title: 'Login user',
    description: '',
    params: {},
    query: {},
    body: {
        username: 'string',
        password: 'password'
    },
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 404, 500],
    middleware: [],
    tags: ['users'],
    typeNames: {
        body: 'LoginBody'
    }
};

exports['API updateUserProfile'] = {
    name: 'updateUserProfile',
    route: 'PATCH /users/:id',
    verb: 'PATCH',
    path: '/users/:id',
    title: 'Update user profile',
    description: '',
    params: {
        id: 'string'
    },
    query: {},
    body: {
        firstName: 'string',
        lastName: 'string'
    },
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 404, 422],
    middleware: ['auth'],
    tags: ['users'],
    typeNames: {
        params: 'UpdateUserProfileParams',
        body: 'UpdateUserProfileBody'
    },
    model: 'User:update'
};

exports['API addBook'] = {
    name: 'addBook',
    route: 'POST /books',
    verb: 'POST',
    path: '/books',
    title: 'Create book',
    description: '',
    params: {},
    query: {},
    body: {
        name: 'string',
        year: 'int'
    },
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 422],
    middleware: ['auth'],
    tags: [],
    typeNames: {
        body: 'AddBookBody'
    },
    model: 'Book:add'
};

exports['API updateBook'] = {
    name: 'updateBook',
    route: 'PATCH /books/:bookId',
    verb: 'PATCH',
    path: '/books/:bookId',
    title: 'Update book',
    description: '',
    params: {
        bookId: 'string'
    },
    query: {},
    body: {
        name: 'string',
        year: 'int'
    },
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 404, 422],
    middleware: ['auth'],
    tags: [],
    typeNames: {
        params: 'UpdateBookParams',
        body: 'UpdateBookBody'
    },
    model: 'Book:update'
};

exports['API deleteBook'] = {
    name: 'deleteBook',
    route: 'DELETE /books/:bookId',
    verb: 'DELETE',
    path: '/books/:bookId',
    title: 'Delete book',
    description: '',
    params: {
        bookId: 'string'
    },
    query: {},
    body: {},
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 404],
    middleware: ['auth'],
    tags: [],
    typeNames: {
        params: 'DeleteBookParams'
    },
    model: 'Book:remove'
};

exports['API listBooks'] = {
    name: 'listBooks',
    route: 'GET /books',
    verb: 'GET',
    path: '/books',
    title: 'List books',
    description: '',
    params: {},
    query: {},
    body: {},
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403],
    middleware: ['auth'],
    tags: [],
    typeNames: {},
    model: 'Book:list'
};

exports['API getBook'] = {
    name: 'getBook',
    route: 'GET /books/:bookId',
    verb: 'GET',
    path: '/books/:bookId',
    title: 'Get book',
    description: '',
    params: {
        bookId: 'string'
    },
    query: {},
    body: {},
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 404],
    middleware: ['auth'],
    tags: [],
    typeNames: {
        params: 'GetBookParams'
    },
    model: 'Book:read'
};

exports['API addCommentToBook'] = {
    name: 'addCommentToBook',
    route: 'POST /books/:bookId/comments',
    verb: 'POST',
    path: '/books/:bookId/comments',
    title: 'Add new comment to book',
    description: '',
    params: {
        bookId: 'string'
    },
    query: {},
    body: {
        content: 'string'
    },
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 404, 422],
    middleware: ['auth'],
    tags: [],
    typeNames: {
        params: 'AddCommentToBookParams',
        body: 'AddCommentToBookBody'
    },
    model: 'Book#comments:add'
};

exports['API deleteCommentOfBook'] = {
    name: 'deleteCommentOfBook',
    route: 'DELETE /books/:bookId/comments/:commentId',
    verb: 'DELETE',
    path: '/books/:bookId/comments/:commentId',
    title: 'Delete comment of book',
    description: '',
    params: {
        bookId: 'string',
        commentId: 'string'
    },
    query: {},
    body: {},
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 404],
    middleware: ['auth'],
    tags: [],
    typeNames: {
        params: 'DeleteCommentOfBookParams'
    },
    model: 'Book#comments:remove'
};

exports['API updateCommentOfBook'] = {
    name: 'updateCommentOfBook',
    route: 'PATCH /books/:bookId/comments/:commentId',
    verb: 'PATCH',
    path: '/books/:bookId/comments/:commentId',
    title: 'Update comment of book',
    description: '',
    params: {
        bookId: 'string',
        commentId: 'string'
    },
    query: {},
    body: {
        content: 'string'
    },
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 404, 422],
    middleware: ['auth'],
    tags: [],
    typeNames: {
        params: 'UpdateCommentOfBookParams',
        body: 'UpdateCommentOfBookBody'
    },
    model: 'Book#comments:update'
};

exports['API listCommentsOfBook'] = {
    name: 'listCommentsOfBook',
    route: 'GET /books/:bookId/comments',
    verb: 'GET',
    path: '/books/:bookId/comments',
    title: 'List comments of book',
    description: '',
    params: {
        bookId: 'string'
    },
    query: {},
    body: {},
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 404],
    middleware: ['auth'],
    tags: [],
    typeNames: {
        params: 'ListCommentsOfBookParams'
    },
    model: 'Book#comments:list'
};

exports['API getReadCommentsOfBook'] = {
    name: 'getReadCommentsOfBook',
    route: 'GET /books/:bookId/comments/:commentId',
    verb: 'GET',
    path: '/books/:bookId/comments/:commentId',
    title: 'Read comments',
    description: '',
    params: {
        bookId: 'string'
    },
    query: {},
    body: {},
    headers: {},
    cookies: {},
    roles: [],
    responses: [200, 403, 404],
    middleware: ['auth'],
    tags: [],
    typeNames: {
        params: 'GetReadCommentsOfBookParams'
    },
    model: 'Book#comments:read'
};
