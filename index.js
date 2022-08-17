const express = require('express')

const app = express()

// app.listen(55999)

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.json())

app.get('/Hi', (req, res) => {
  res.send('Hi, Tom here!')
}) // get mapping

app.post('/createTune', (req, res) => {
  console.log('BODY:', req.body)

  res.status(200).send()
})

app.get('/getAllTunes', (req, res) => {
  res.send()
})

app.get('/getTune/:id', (req, res) => {
  console.log('PARAMS:', req.params)

  res.send()
})

app.put('/updateTune', (req, res) => {
  console.log('QUERY:', req.query)

  res.send()
})

app.delete('/removeTune/:id', (req, res) => {
  console.log('PARAMS:', req.params)

  res.send()
})

// let names = ['Me', 'Jakob', 'Fred', 'Abdullah', 'Sky', 'Rayhan']

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

const server = app.listen(55999, () => {
  console.log(
    `Server started successfully on port number ${server.address().port}`
  )
})
