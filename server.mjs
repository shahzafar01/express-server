import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("someone is requesting on this server", req.ip);
    res.send('Hello World from shahmir zafar Computer!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})