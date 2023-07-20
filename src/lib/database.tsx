import { database } from "@/services/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"

export const initializeNewUser = async (currentUser: any) => {
  const usersRef = doc(database, "users", currentUser.uid)
  setDoc(usersRef, { saved_books:[] })
}

export const getUserDataFromFirestore = async (currentUser: any) => {
  const docRef = doc(database, "users", "KY19FfcvtyZ5HQ0luWoabHJ47Lp2")
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.log("No such document!")
  }
}

export const saveBook = async (currentUser: any, newBookData: any, savedList: any) => {
  const newList = [...savedList]

  newList.push(newBookData)

  const usersRef = doc(database, "users", currentUser.uid)
  setDoc(usersRef, { saved_books: newList })
}
