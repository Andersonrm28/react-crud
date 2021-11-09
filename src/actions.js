import { firebaseApp } from './firebase'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

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