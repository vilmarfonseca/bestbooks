import { database } from "@/services/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"

export const initializeNewUser = async (currentUser: any) => {
  const usersRef = doc(database, "users", currentUser.uid)
  setDoc(usersRef, { saved_books: [] })
}

export const getUserData = async (currentUser: any) => {
  const docRef = doc(database, "users", currentUser.uid)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.log("No such document!")
    return null
  }
}

export const saveBookToMyList = async (
  currentUser: any,
  newBookData: any,
  selectedCategory: any,
) => {
  const currentList = await getUserData(currentUser)
  const newList = [...currentList?.saved_books]

  if (!newList.find((book) => book.primary_isbn10 === newBookData.primary_isbn10)) {
    newBookData.originCategory = selectedCategory.display_name
    newBookData.saved = true
    newList.push(newBookData)

    const usersRef = doc(database, "users", currentUser.uid)
    setDoc(usersRef, { saved_books: newList })
    return newBookData
  } else return null
}

export const removeBookFromMyList = async (currentUser: any, bookToRemove: any) => {
  const currentList = await getUserData(currentUser)
  const newList = [...currentList?.saved_books]

  const idxToRemove = newList.findIndex(
    (book) => book.primary_isbn10 === bookToRemove.primary_isbn10,
  )

  if (idxToRemove !== -1) {
    newList.splice(idxToRemove, 1)

    const usersRef = doc(database, "users", currentUser.uid)
    setDoc(usersRef, { saved_books: newList })
    return true
  } else {
    return false
  }
}

export const getBookSavedStatus = async (currentUser: any, newBookData: any) => {
  const userData = await getUserData(currentUser)
  const savedBooks = [...userData?.saved_books]

  const book = savedBooks?.find(
    (book: { primary_isbn10: any }) =>
      book.primary_isbn10 === newBookData.primary_isbn10,
  )

  if (book) {
    return book
  } else return null
}
