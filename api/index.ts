import express from 'express'
import cors from 'cors'
import { PlayerStat } from '../types'
import { connectDb, initialiseDb, port } from './connect'

const app = express()

initialiseDb()

app.use(cors())
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send({ error: err })
})
app.use(express.json())

app.get('/scores', async (req, res) => {
  console.log('getting scores')

  const db = await connectDb()
  const stats: PlayerStat[] = await db.query('select name, score from player_stats')
  res.json({ body: stats })
})

app.put('/scores', async (req, res) => {
  console.log('updating score')

  const { name, score } = req.body
  const db = await connectDb()

  // would do more validation here if it made sense to
  if (typeof name !== 'string' || typeof score !== 'number') {
    console.error({ error: 'Invalid request', body: req.body })
    return res.status(400).json({ error: 'Invalid fields' })
  }

  await db.query(
    'update player_stats set score = ? where name = ?',
    [score, name])

  // would check that the update worked/only affected 1 row here

  res.send()
})

app.listen(port)
