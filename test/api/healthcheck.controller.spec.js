const request = require('supertest')
const mock    = require('../../src/app').app

describe('The healthcheck controller', () => {
    it('should return a 200 statuscode if ok', (done) => {
        request(mock)
            .get('/health-check')
            .expect(200)
            .end((err, res) => {
                if (err) throw new Error(err)
                done()
            })
    })
    
    it('should return the expected response body', (done) => {
        request(mock)
            .get('/health-check')
            .end((err, res) => {
                if (err) throw new Error(err)

                expect(res.body).to.include.all.keys('result', 'success')
                expect(res.body.result).to.equal('ok')
                expect(res.body.success).to.be.true

                done()
            })
    })
})