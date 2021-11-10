import { firebaseApp } from './firebase'
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore/lite';

const db = getFirestore(firebaseApp)

export const getCollection = async(collectionParam) => {
    const result = { statusResponse: false, data: null, error: null }
    try {
        const collec = collection(db, collectionParam)
        const snapShot = await getDocs(collec)
        const collecList = snapShot.docs.map(doc => ({ id:doc.id, ...doc.data() }))

        result.statusResponse = true
        result.data = collecList
    } catch (error) {
        result.error = error
    }

    return result
}

export const addDocument = async(collectionParam, data) => {
    const result = { statusResponse: false, data: null, error: null }
    try {
        const collec = collection(db, collectionParam)
        const response = await addDoc(collec, data)

        result.statusResponse = true
        result.data = { id: response.id }
    } catch (error) {
        result.error = error
    }

    return result
}

export const getDocument = async(collectionParam, id) => {
    const result = { statusResponse: false, data: null, error: null }
    try {
        const response = doc(db, collectionParam, id)
        //const document = await getDoc(response)
        result.data = { id: response.id, ...response.data() }
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }

    return result
}

export const updateDocument = async(collectionParam, id, data) => {
    const result = { statusResponse: false, data: null, error: null }
    try {
        const documentById = doc(db, collectionParam, id)
        await updateDoc(documentById, data)
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }

    return result
}

export const deleteDocument = async(collectionParam, id) => {
    const result = { statusResponse: false, data: null, error: null }
    try {
        const documentById = doc(db, collectionParam, id)
        await deleteDoc(documentById)
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }

    return result
}
