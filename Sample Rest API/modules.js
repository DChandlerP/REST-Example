// THIS FILE WAS AUTO-GENERATED

const SRC_MODULES = [
    './src/app',
    './src/controllers/books/addBookImpl',
    './src/controllers/books/deleteBookImpl',
    './src/controllers/books/getBookImpl',
    './src/controllers/books/listBooksImpl',
    './src/controllers/books/updateBookImpl',
    './src/controllers/books_comments/addCommentToBookImpl',
    './src/controllers/books_comments/deleteCommentOfBookImpl',
    './src/controllers/books_comments/getReadCommentsOfBookImpl',
    './src/controllers/books_comments/listCommentsOfBookImpl',
    './src/controllers/books_comments/updateCommentOfBookImpl',
    './src/controllers/users/addUserImpl',
    './src/controllers/users/deleteUserImpl',
    './src/controllers/users/getUserProfileImpl',
    './src/controllers/users/listUsersImpl',
    './src/controllers/users/loginImpl',
    './src/controllers/users/updateUserImpl',
    './src/providers/page',
    './src/routes',
    './src/types',
    './src/utils/exceptionHandler',
    './src/utils/responses'
];

const TEST_MODULES = ['./test/mocks/configMock', './test/mocks/mailMock'];

module.exports = { src: SRC_MODULES, test: TEST_MODULES };
