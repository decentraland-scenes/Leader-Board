const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({ origin: true }))

const admin = require('firebase-admin')

var serviceAccount = require('../permissions.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dcl-door.firebaseio.com',
})

const db = admin.firestore()

export type score = {
  name: string
  id: string
  score: number
}

app.get('/hello-world', (req: any, res: any) => {
  return res.status(200).send('Hello World!')
})

let scoreBoard = db.collection('scoreBoard')

let topTen = scoreBoard.orderBy('score', 'desc').limit(10)

app.post('/publish-scores', async (req: any, res: any) => {
  let newScore = req.body

  try {
    await topTen.get().then((querySnapshot: { docs: any }) => {
      let docs = querySnapshot.docs
      let worthyScore: boolean = false

      for (let i = 0; i < docs.length; i++) {
        if (newScore.score > docs[i].score) {
          worthyScore = true
        }
      }

      if (worthyScore || docs.length <= 10) {
        ;(async () => {
          await scoreBoard
            .doc('/' + Math.floor(Math.random() * 1000) + '/')
            .create({
              id: newScore.id,
              name: newScore.name,
              score: newScore.score,
            })
        })()

        return res.status(200).send('Published score!')
      }
      return res.status(200).send('Score not high enough')
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
})

app.get('/get-scores', async (req: any, res: any) => {
  ;(async () => {
    try {
      let response: any = []
      await topTen.get().then((querySnapshot: { docs: any }) => {
        let docs = querySnapshot.docs
        for (let doc of docs) {
          console.log(doc)
          response.push(doc.data())
        }
        return
      })
      return res.status(200).send(response)
    } catch (error) {
      console.log(error)
      return res.status(500).send(error)
    }
  })()
})

exports.app = functions.https.onRequest(app)
