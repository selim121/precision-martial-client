/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }

      const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }

      const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }

      const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
      }
      
      const logOut = () => {
        setLoading(true)
        return signOut(auth)
      }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          console.log('current user', currentUser)
          setLoading(false)
        })
        return () => {
          return unsubscribe()
        }
      }, [])

      const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        updateUserProfile,
        signInWithGoogle,
        resetPassword,
        logOut
      }
      return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}

export default AuthProvider;