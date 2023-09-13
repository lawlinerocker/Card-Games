import firebaseApp from './connect'
import 'firebase/firestore'

const DB = firebaseApp.firestore()
const roomsColl = DB.collection('rooms')
const usersColl = DB.collection('users')


export const listenAllRooms = (success,unsuccess) => {
  //console.log(`listenAllRooms is activated`)
  var unsubscribe = roomsColl.onSnapshot(
    (snapshot) => {
      if(snapshot.empty){
        return
      }
      let rooms = []
      snapshot.forEach((doc) => {
        rooms.push(doc.data())
      })
      success(rooms)
    },
    (err) => {
      unsuccess(`listenAllRooms error = ${err}`)
    }
  )
}

export const createRoom = (room,roomName,success) => {
  console.log('createRoom is activated')
  roomsColl.add({
    room:room,
    roomName:roomName,
    status:'กำลังรอ',
  })
  .then((doc) => {
    success(doc)
  })
  .catch((err)=>{
    console.log(err)
  })
}

export const enterRoom = (room,success) => {
  console.log('enterRoom is activated')
  roomsColl.where('room','==',room).get()
  .then((snapshot) => {
        snapshot.forEach((doc) => {
            roomsColl.doc(doc.id).update({status:'กำลังเล่น'})
            success(doc)
        })
    })
  .catch((err)=>{
    //unsuccess(`enterRoom err ${err}`)
  })
 
}

// export const createRoom = (room_id,roomName,id,deckId,success,unsuccess) => {
//   //let userIDRef = usersColl.doc(uid)
//   roomsColl.add({
//     room:room_id,
//     roomName:roomName,
//     host:id,
//     deckId:deckId,
//     status:'กำลังรอ'
//   })
//   .then((doc) => {
//     success(doc)
//   })
//   .catch((err)=>{
//     unsuccess(`createRoom err ${err}`)
//   })
// }

// export const enterRoom = (room,id,success,unsuccess) => {
//   roomsColl.where('room','==',room).get()
//   .then((snapshot) => {
//         snapshot.forEach((doc) => {
//             //console.log(doc)
//             //console.log(doc.id)
//             roomsColl.doc(doc.id).update({status:'กำลังเล่น',player:id})
//             success(doc)
//         })
//     })
//   .catch((err)=>{
//     unsuccess(`enterRoom err ${err}`)
//   })
 
// }
