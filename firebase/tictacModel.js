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
      console.log('listenThisRoom err')
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
      console.log('listenThisGame err')
    }
  )
}
// export const addDeck = (room,deckId,cards) => {
//   //console.log('addDeck is activated')
//   roomsColl.where('room','==',room).get()
//     .then((snapshot)=>{
//       snapshot.forEach((doc)=>{
//         //console.log(doc.data())
//         if(doc.data().status=='กำลังรอ'){
//           gamesColl.add({
//             room:room,
//             deckId:deckId,
//             deck:cards
//             })
//             .then()
//            .catch()
//         }
//       })
//     })
//     .catch()
// }

export const createGame = (room,emblem) => {
  //console.log('createGame is activated')
  roomsColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        console.log(doc.data())
        if(doc.data().status=='กำลังรอ'){
          //console.log('game create successful')
          gamesColl.add({
              room:room,
              pos1:'empty',
              pos2:'empty',
              pos3:'empty',
              pos4:'empty',
              pos5:'empty',
              pos6:'empty',
              pos7:'empty',
              pos8:'empty',
              pos9:'empty',
              turn:emblem,
              winner:'empty'
            })
            .then((doc)=>{
              //success(doc.data())
            })
            .catch()
        }
      })
    })
}

// export const updateWinner = (room,nickname) => {
  
//   gamesColl.where('room','==',room).get()
//     .then((snapshot)=>{
//       snapshot.forEach((doc)=>{
//         if()
//       })
//     })
// }



export const updateGamePos1 = (room,emblem) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        if(emblem=='o'){
          gamesColl.doc(doc.id).update({pos1:emblem,turn:'x'})
        }else{
          gamesColl.doc(doc.id).update({pos1:emblem,turn:'o'})
        }
      })
    })
}
export const updateGamePos2 = (room,emblem) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        if(emblem=='o'){
          gamesColl.doc(doc.id).update({pos2:emblem,turn:'x'})
        }else{
          gamesColl.doc(doc.id).update({pos2:emblem,turn:'o'})
        }
      })
    })
}
export const updateGamePos3 = (room,emblem) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        if(emblem=='o'){
          gamesColl.doc(doc.id).update({pos3:emblem,turn:'x'})
        }else{
          gamesColl.doc(doc.id).update({pos3:emblem,turn:'o'})
        }
      })
    })
}
export const updateGamePos4 = (room,emblem) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        gamesColl.doc(doc.id).update({pos4:emblem})
      })
    })
}
export const updateGamePos5 = (room,emblem) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        gamesColl.doc(doc.id).update({pos5:emblem})
      })
    })
}
export const updateGamePos6 = (room,emblem) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        gamesColl.doc(doc.id).update({pos6:emblem})
      })
    })
}
export const updateGamePos7 = (room,emblem) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        gamesColl.doc(doc.id).update({pos7:emblem})
      })
    })
}
export const updateGamePos8 = (room,emblem) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        gamesColl.doc(doc.id).update({pos8:emblem})
      })
    })
}
export const updateGamePos9 = (room,emblem) => {
  gamesColl.where('room','==',room).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        gamesColl.doc(doc.id).update({pos9:emblem})
      })
    })
}




