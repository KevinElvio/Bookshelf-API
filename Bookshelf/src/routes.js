const { addBookHandler, getBookHandler, getDetailBookHandler, updateBookHandler, deleteBookHandler } = require('./handler');

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
        path: '/books/{bookid}',
        handler: getDetailBookHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookid}',
        handler: updateBookHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookid}',
        handler: deleteBookHandler,
    },


];


module.exports = routes;