function createid(books) {
    if (books.length === 0) return 1;

    const maiorId = Math.max(...books.map(book => book.id));
    return maiorId + 1;
}

module.exports = createid;
