import firebaseApp from './connect'
import 'firebase/firestore'

const DB = firebaseApp.firestore()
const gamesColl = DB.collection('games')
const roomsColl = DB.collection('rooms')
const usersColl = DB.collection('users')

export const listenThisRoom = (room,success) => {
  var unsubscribe = roomsColl.where('room','==',room)
  .onSnapshot(
    (snapshot) => {
      if(snapshot.empty){
        return
      }
      let rooms = []
      snapshot.forEach((doc) => {
        rooms.push(doc.data())
        }
      )
      success(rooms)
    },
    (err) => {
      console.log(err)
    }
  )
}

export const listenThisGame = (room,success) => {
  var unsubscribe = gamesColl.where('room','==',room)
  .onSnapshot(
    (snapshot) => {
      if(snapshot.empty){
        return
      }
      let game = []
      snapshot.forEach((doc) => {
        game.push(doc.data())
        }
      )
      success(game)
    },
    (err) => {
      console.log(err)
    }
  )
}

export const updateAll = (room,deck,player1card,player2card,turn) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        gamesColl.doc(doc.id).update({deck:deck,player1card:player1card,player2card:player2card,turn:turn+1})
      })
    })
}

export const updateAfterPull = (room,deck,player,playerCard,status) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        if(player=='1'){
          gamesColl.doc(doc.id).update({deck:deck,player1card:playerCard,player1ready:status})
        }
        if(player=='2'){
          gamesColl.doc(doc.id).update({deck:deck,player2card:playerCard,player2ready:status})
        }
      })
    })
}

export const updateDeck = (room,deck) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        gamesColl.doc(doc.id).update({deck:deck})
      })
    })
}

export const updatePlayerCard = (room,player,playerCard) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        if(player=='1'){
          gamesColl.doc(doc.id).update({player1card:playerCard})
        }
        if(player=='2'){
          gamesColl.doc(doc.id).update({player2card:playerCard})
        }
      })
    })
}

export const changeTurn = (room,turn) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        gamesColl.doc(doc.id).update({turn:turn+1})
      })
    })
}



export const createGame = (room) => {
  gamesColl.add({
    room:room,
    deck:[],
    player1card:[],
    player2card:[],
    player1ready:'no',
    player2ready:'no',
    turn:1
  })
}

export const playerReady = (room,player,deck) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        if(player=='1'){
          gamesColl.doc(doc.id).update({player1ready:'ready'})
        }
        if(player=='2'){
          gamesColl.doc(doc.id).update({player2ready:'ready'})
        }
      })
    })
  if(player=='1'){
    gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        gamesColl.doc(doc.id).update({deck:deck})
      })
    })
  }
}

export const changeReady = (room,player,status) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        if(player=='1'){
          gamesColl.doc(doc.id).update({player1ready:status})
        }
        if(player=='2'){
          gamesColl.doc(doc.id).update({player2ready:status})
        }
        if(player=='both'){
          gamesColl.doc(doc.id).update({player1ready:status,player2ready:status})
        }
      })
    })
}

export const breakGame = (room) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        gamesColl.doc(doc.id).delete()
      })
    })
  roomsColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        roomsColl.doc(doc.id).delete()
      })
    })
}




