import { database } from "@/services/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"

export const initializeNewUser = async (currentUser: any) => {
  try {
    if (!currentUser || !currentUser.uid) {
      throw new Error("Invalid user object or missing UID.")
    }

    const usersRef = doc(database, "users", currentUser.uid)
    await setDoc(usersRef, { saved_books: [] })
  } catch (error) {
    console.error("Error while initializing new user:", error)
    throw error
  }
}

export const getUserData = async (currentUser: any) => {
  try {
    if (!currentUser || !currentUser.uid) {
      throw new Error("Invalid user object or missing UID.")
    }

    const docRef = doc(database, "users", currentUser.uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log("No such document!")
      return null
    }
  } catch (error) {
    console.error("Error while getting user data:", error)
    throw error
  }
}

export const saveBookToMyList = async (
  currentUser: any,
  newBookData: any,
  selectedCategory: any,
) => {
  try {
    if (!currentUser || !currentUser.uid) {
      throw new Error("Invalid user object or missing UID.")
    }

    const currentList = await getUserData(currentUser)
    const newList = [...currentList?.saved_books]

    if (
      !newList.find((book) => book.primary_isbn10 === newBookData.primary_isbn10)
    ) {
      newBookData.originCategory = selectedCategory.display_name
      newBookData.saved = true
      newList.push(newBookData)

      const usersRef = doc(database, "users", currentUser.uid)
      await setDoc(usersRef, { saved_books: newList })
      return newBookData
    } else {
      return null
    }
  } catch (error) {
    console.error("Error while saving book to user's list:", error)
    throw error
  }
}

export const removeBookFromMyList = async (currentUser: any, bookToRemove: any) => {
  try {
    if (!currentUser || !currentUser.uid) {
      throw new Error("Invalid user object or missing UID.")
    }

    const currentList = await getUserData(currentUser)
    const newList = [...currentList?.saved_books]

    const idxToRemove = newList.findIndex(
      (book) => book.primary_isbn10 === bookToRemove.primary_isbn10,
    )

    if (idxToRemove !== -1) {
      newList.splice(idxToRemove, 1)

      const usersRef = doc(database, "users", currentUser.uid)
      await setDoc(usersRef, { saved_books: newList })
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error("Error while removing book from user's list:", error)
    throw error
  }
}

export const getBookSavedStatus = async (currentUser: any, newBookData: any) => {
  try {
    if (!currentUser || !currentUser.uid) {
      throw new Error("Invalid user object or missing UID.")
    }

    const userData = await getUserData(currentUser)
    const savedBooks = [...userData?.saved_books]

    const book = savedBooks?.find(
      (book: { primary_isbn10: any }) =>
        book.primary_isbn10 === newBookData.primary_isbn10,
    )

    if (book) {
      return book
    } else {
      return null
    }
  } catch (error) {
    console.error("Error while getting book saved status:", error)
    throw error
  }
}
