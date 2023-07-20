import { database } from "@/services/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"

export const initializeNewUser = async (currentUser: any) => {
  const usersRef = doc(database, "users", currentUser.uid)
  setDoc(usersRef, { saved_books: [] })
}

export const getUserDataFromFirestore = async (currentUser: any) => {
  const docRef = doc(database, "users", currentUser.uid)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.log("No such document!")
    return null
  }
}

export const saveBookToFirestore = async (currentUser: any, newBookData: any) => {
  const currentList = await getUserDataFromFirestore(currentUser)
  const newList = [...currentList?.saved_books]

  newList.push(newBookData)

  const usersRef = doc(database, "users", currentUser.uid)
  setDoc(usersRef, { saved_books: newList })
}
