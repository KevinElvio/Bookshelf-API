const { nanoid } = require("nanoid");
const book = require("./book");

const addBookHandler = (req, h) => {
    let { name, year, author, summary, publisher, pageCount, readPage, reading } = req.payload;

    const id = nanoid(16);

    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    let finished = false;


    const newBook = {
        id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt
    };

    book.push(newBook);

    const isSuccess = book.filter((b) => b.id === id).length > 0;

    if (isSuccess) {
        if (pageCount == readPage) {
            finished = true;
            reading = false;
        }
        else if (name === undefined) {
            const response = h.response({
                status: 'fail',
                message: 'Gagal menambahkan buku. Mohon isi nama buku',
            });
            response.code(400);
            return response;
        }
        else if (readPage > pageCount) {
            const response = h.response({
                status: 'fail',
                message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
            });
            response.code(400);
            return response;
        }
        else {
            finished = false;
            reading = true;
        }


        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                id: id,
                name: name,
                year: year,
                author: author,
                summary: summary,
                publisher: publisher,
                pageCount: pageCount,
                readPage: readPage,
                finished: finished,
                reading: reading,
                insertedAt: insertedAt,
                updatedAt: updatedAt,
            },
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;

};

const getBookHandler = (req, h) => {
    const { name, reading, finished } = req.query;

    if (name !== undefined) {
        const response = h.response({
            status: 'success',
            data: {
                books: book.filter((b) => b.name.toLowerCase().includes(name.toLowerCase())).map((b) => ({
                    id: b.id,
                    name: b.name,
                    publisher: b.publisher,
                })),
            },
        });
        response.code(200);
        return response;
    }

    if (reading !== undefined) {
        const response = h.response({
            status: 'success',
            data: {
                books: book.filter((b) => b.reading == reading).map((b) => ({
                    id: b.id,
                    name: b.name,
                    publisher: b.publisher,
                })),
            },
        });
        response.code(200);
        return response;
    }

    if (finished !== undefined) {
        const response = h.response({
            status: 'success',
            data: {
                books: book.filter((b) => b.finished == finished).map((b) => ({
                    id: b.id,
                    name: b.name,
                    publisher: b.publisher,
                })),
            },
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'success',
        data: {
            books: book.map((b) => ({
                id: b.id,
                name: b.name,
                publisher: b.publisher,
            })),
        },
    });
    response.code(200);
    return response;
};

module.exports = { addBookHandler, getBookHandler };