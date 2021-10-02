const httpCaller = require('supertest');
const api = httpCaller('https://jsonplaceholder.typicode.com')

function getTypicode() {
    return api.get('/posts')
    .set('Connection', 'keep-alive')
    .set('Accept', 'application/json');
}

function postTypicode(payload) {
    return api.post('/posts')
    .set('Connection', 'keep-alive')
    .set('Accept', 'application/json')
    .send(JSON.stringify(payload));
}

module.exports = {
    getTypicode,
    postTypicode
}