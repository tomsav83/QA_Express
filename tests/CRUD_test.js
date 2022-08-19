const { describe, it } = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)
const { expect } = chai

const Tune = require('../db')

const server = require('../index')

describe('CRUD testing', () => {
  let id

  beforeEach(async () => {
    try {
      await Tune.deleteMany({})
      const testTune = await Tune.create({
        title: "Where's My Mind",
        artist: 'The Pixies',
        length: 4.3,
        rating: 8,
      })
      id = testTune._id
    } catch (err) {
      console.error(err)
    }
  })
  // create
  it('Should create a tune', (done) => {
    const newTune = {
      title: 'Dark Horse',
      artist: 'George Harrison',
      length: 3.54,
      rating: 7,
    }
    chai
      .request(server)
      .post('/tunes/createTune')
      .send(newTune)
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.status).to.equal(201)
        expect(res.body).to.include(newTune)
        expect(res.body._id).to.not.be.null

        return done()
      })
  })

  // Read
  it('Should get all tunes', (done) => {
    chai
      .request(server)
      .get('/tunes/getAllTunes')
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.status).to.equal(200)
        expect(res.body._id).to.not.be.null
        return done()
      })
  })

  // Update
  it('Should update a tune', (done) => {
    chai
      .request(server)
      .patch(`/tunes/updateTune/${id}`)
      .query({ title: 'Idiot' })
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.status).to.equal(200)
        expect(res.body).to.include({
          _id: id.toString(),
          title: "Where's My Mind",
          artist: 'The Pixies',
          length: 4.3,
          rating: 8,
        })
        return done()
      })

    // delete
    it('Should delete a tune', (done) => {
      chai
        .request(server)
        .delete(`/tunes/removeTune/${id}`)
        .end((err, res) => {
          expect(err).to.be.null
          expect(res.status).to.equal(204)
          return done()
        })
    })
  })
})
