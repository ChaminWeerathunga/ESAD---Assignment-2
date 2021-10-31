const expect = require('chai').expect;
const request = require('supertest');

const conn = require('../../../app');

describe('GET /', ()=>{
    before((done) => {
        conn.connect()
            .then(()=> done())
            .catch((err)=> done(err));
    })

    after((done) => {
        conn.close()
            .then(()=> done())
            .catch((err)=> done(err));
    })

    it('OK, getting requisition', (done) => {
        request(conn.app).get('/requisitions/')
            .then((res => {
                const body = res.body;
                expect(body).to.be.a('array')
                done();
            }))
            .catch((err) => done(err))
    })
})