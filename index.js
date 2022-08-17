const express = require('express')

const app = express()

// app.listen(55999)

const bodyParser = require('body-parser')

app.use(bodyParser.json())

let tunes = [
  {
    name: 'Mono',
    artist: 'BEAK>',
    length: 3.09,
    rating: 4.5,
  },
]

// app.use(express.json())

app.use((req, res, next) => {
  console.log('All')

  return next()
})

app.use((req, res, next) => {
  console.log('work')

  return next()
})

app.use((req, res, next) => {
  console.log('and')

  return next()
})

app.use((req, res, next) => {
  console.log('no')

  return next()
})

app.use((req, res, next) => {
  console.log('play')

  // return next('sleep')
  return next()
})

app.use((req, res, next) => {
  console.log('makes')

  return next()
})

app.use((req, res, next) => {
  console.log('Tom')

  return next()
})

app.use((req, res, next) => {
  console.log('a')

  return next()
})

app.use((req, res, next) => {
  console.log('dull')

  return next()
})

app.use((req, res, next) => {
  console.log('boy')

  return next()
})

const middleware = (req, res, next) => {
  console.log('AllWorkAndNoPlayMakesTomAdullBoy')
  return next()
}

app.get('/Hi', middleware, (req, res) => {
  res.send("Heeere's Tommy")
}) // get mapping

app.post('/createTune', (req, res, next) => {
  console.log('BODY:', req.body)
  if (!req.body || Object.keys(req.body).length < 1)
    return next({ status: 400, message: 'No body' })

  return res.status(200).send()
})

app.get('/getAllTunes', (req, res) => {
  return res.send()
})

app.get('/getTune/:id', (req, res) => {
  console.log('PARAMS:', req.params)

  return res.send()
})

app.put('/updateTune', (req, res) => {
  console.log('QUERY:', req.query)

  return res.send()
})

app.delete('/removeTune/:id', (req, res) => {
  console.log('PARAMS:', req.params)

  return res.send()
})

app.use('*', (req, res, next) =>
  next({ status: 404, message: 'Incorrect URL' })
) // wildcard will catch any request with no endpoint and return invalid request message

// let names = [  'Me', 'Jakob', 'Fred', 'Abdullah', 'Sky', 'Rayhan' ]

// app.get('/getAll', (req, res) => {
//   res.send(names)
// })

// app.get('/get/:id', (req, res) => {
//   res.send(names[req.params.id])
// })

// app.get('/delete/:id', (req, res) => {
//   res.send(names.splice(req.params.id, 1))
// })

// app.post('/create', (req, res) => {
//   const name = req.body.name
//   names.push(name)
//   res.status(201).send(`${name} added successfully`)
// })

// app.post('/replace/:index', (req, res) => {
//   const name = req.query.name
//   const index = req.params.index
//   const old = names[index]
//   names[index] = name
//   res.status(202).send(`${old} successfully replaced with ${name}`)
// })

app.use((err, req, res, next) => {
  res.status(err.status).send(err.message)
})

const server = app.listen(55999, () => {
  console.log(
    `Server started successfully on port number ${server.address().port}`
  )
})
