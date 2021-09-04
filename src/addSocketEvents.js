import {
  CONNECTION,
  DISCONNECT,
  JOIN_ROOM,
  SENT_MESSAGE,
  RECEIVE_MESSAGE,
  USER_CONNECTED,
  USER_DISCONNECTED,
} from './constants'

const addSocketEvents = (io) => {
  io.on(CONNECTION, (socket) => {
    let userId
    let roomBroadcast

    try {
      socket.on(JOIN_ROOM, ({ room, id }) => {
        userId = id
        roomBroadcast = room

        socket.join(roomBroadcast)
        socket.to(roomBroadcast).emit(USER_CONNECTED, userId)
      })

      socket.on(SENT_MESSAGE, (message) => {
        io.to(roomBroadcast).emit(RECEIVE_MESSAGE, { message, from: userId })
      })

      socket.on(DISCONNECT, () => {
        socket.to(roomBroadcast).emit(USER_DISCONNECTED, userId)
      })
    } catch (error) {
      console.log(error)
    }
  })
}

export { addSocketEvents }
