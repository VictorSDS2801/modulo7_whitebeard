function createid(movies) {
    if (movies.length === 0) return 1;

    const maiorId = Math.max(...movies.map(movie => movie.id));
    return maiorId + 1;
}

module.exports = createid;
