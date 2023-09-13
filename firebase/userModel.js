import firebaseApp from "./connect";
import 'firebase/firestore'

const DB = firebaseApp.firestore()
const usersColl = DB.collection('users')

export const addUser = (email, profile, success, unsuccess) => {
    console.log(`addUser is activated user: ${email} firstname : ${profile.firstname}`)
    usersColl.add({
        firstname: profile.firstname,
        lastname: profile.lastname,
        studentID: profile.studentID,
        username: email
    })
        .then((doc) => {
            success(doc.id)
        })
        .catch((err) => {
            unsuccess(err)
        })
}

export const getUserByDocID = (docID, success, unsuccess) => {
    usersColl.doc(docID).get()
        .then((doc) => {
            if (doc.exists) {
                success(doc)
            } else {
                unsuccess(`User not found`)
            }
        })
        .catch((err) => {
            unsuccess(err)
        })
}

export const getUserByUsername = (username,success,unsuccess) => {
    console.log(`getUserByUsername is activated username : ${username}`)
    usersColl.where('username','==',username).get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data())
            success(doc)
        })
    })
    .catch((err) => {
        unsuccess(err)
    })
}
