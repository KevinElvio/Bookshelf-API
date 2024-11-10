const { addBookHandler, getBookHandler, getDetailBookHandler, updateBookHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getBookHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getDetailBookHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBookHandler,
    },

];


module.exports = routes;