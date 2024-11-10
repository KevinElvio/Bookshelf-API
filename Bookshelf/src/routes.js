const { addBookHandler, getBookHandler, getDetailBookHandler } = require('./handler');

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
        path: '/books/{Id}',
        handler: getDetailBookHandler,
    },

];


module.exports = routes;