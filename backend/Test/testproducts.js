const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const {response } = require('express');

chai.should();

chai.use(chaiHttp);

describe("All products",()=>{
    describe('GET /api/products',()=>{
        it("to get productlist",(done)=>{
            chai.request('http://localhost:5001')
            .get("/api/products")
            .end((err,response)=>{
                response.should.have.status(200);
                // response.body.should.be.a('array');
                done();
            })
        })
    })
})

// const expect = require('chai').expect;
// const request = require('request');
// // const { TESTING_URL } = require('../../../constants/tests')

// describe('Delete API', () => {
//   describe('No id provided validation error', () => {

//     const id = ' '

//     it('Status', done => {
//       request.delete('/api/products/:id', {}, (_, response) => {
//         expect(response.status).to.equal(404)
//         done()
//       })
//     })

//     // it('Content', done => {
//     //   request.delete('/api/products/:id', {}, (_, response) => {
//     //     const body = JSON.parse(response.body)
//     //     expect(body.errors[0]).to.equal('You have to provide a id')
//     //     done()
//     //   })
//     // })
//   })

// //   describe('Invalid id provided validation error', () => {

// //     const id = '5f4c0449abaf862510130ad'

// //     it('Status', done => {
// //       request.delete(`/api/products/${id}`, {}, (_, response) => {
// //         response.should.have.status(200);
// //         done()
// //       })
// //     })

// //     it('Content', done => {
// //       request.delete('/api/products/${id}', {}, (_, response) => {
// //         const body = JSON.parse(response.body)
// //         expect(body.errors[0]).to.equal('Please provide a valid id')
// //         done()
// //       })
// //     })
// //   })

// //   describe('Invalid id provided validation error', () => {

// //     const id = '5dae2f4d860c0dff2363e317'

// //     it('Status & Content', done => {
// //       request.delete('/api/products/${id}', {}, (_, response) => {
// //         const body = JSON.parse(response.body)
// //         expect(response.statusCode).to.equal(200)
// //         expect(body.message).to.equal('deleted successfully')
// //         done()
// //       })
// //     })
// //   })
// })