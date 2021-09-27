let chai = require('chai');
let server = require('../app.js');
let server1 = require('../app1.js')
let chaiHttp = require('chai-http');
const { response } = require('express');

chai.should();
chai.use(chaiHttp);

describe('Tasks Api',()=>{

    describe('GET /room',()=>{
        it('It Should Get all the Tasks',(done)=>{
            chai.request(server)
            .get('/room')
            .end((err,response)=>{
                response.should.have.status(200);
                response.body.should.be.a('array');
            })
            done();
        })
    })


    describe('POST /staff',()=>{
        it('It Should Get all the Staff details',(done)=>{
            chai.request(server)
            .get('/staff')
            .end((err,response)=>{
                response.should.have.status(404);
                response.body.should.not.be.a('array');
            })
            done();
        })
    })


    describe('GET /booking',()=>{
        it('It Should Get all the Bookings',(done)=>{
            chai.request(server)
            .get('/booking')
            .end((err,response)=>{
                response.should.have.status(200);
                response.body.should.be.a('array');
            })
            done();
        })
    })
})