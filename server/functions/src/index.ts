//const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({ origin: true }))
require('isomorphic-fetch')

export type score = {
  name: string
  id: string
  score: number
}

app.get('/hello-world', (req: any, res: any) => {
  return res.status(200).send('Hello World!')
})

app.post('/publish-scores', async (req: any, res: any) => {
  //   let score = req.body

  //   updateSeqJSON(stones, realm)

  return res.status(200).send('Published score!')
})

app.get('/get-scores', async (req: any, res: any) => {
  return res.status(200).json({ scoreBoard: '' })
})
