import {
  CONNECTION,
  DISCONNECT,
  JOIN_ROOM,
  SENT_MESSAGE,
  RECEIVE_MESSAGE,
  USER_DISCONNECTED,
} from './constants'

const addSocketEvents = (io) => {
  io.on(CONNECTION, (socket) => {
    let roomBroadcast
    let clientId

    try {
      socket.on(JOIN_ROOM, ({ room, id }) => {
        socket.join(room)
        roomBroadcast = room
        clientId = id
      })

      socket.on(SENT_MESSAGE, (incomingMessage) => {
        io.to(roomBroadcast).emit(RECEIVE_MESSAGE, incomingMessage)
      })

      socket.on(DISCONNECT, () => {
        io.to(roomBroadcast).emit(USER_DISCONNECTED, clientId)
      })
    } catch (error) {
      console.log(error)
    }
  })
}

export { addSocketEvents }
