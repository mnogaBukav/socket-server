import http from 'http'

import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { Server } from 'socket.io'

import { addSocketEvents } from './addSocketEvents'

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(cors())

app.use('/', (req, res) => {
  res.send('ok')
})

io.on('connection', addSocketEvents)

server.listen(process.env.PORT, () => {
  console.log('listening on', process.env.PORT)
})

export default app
