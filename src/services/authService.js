import { useState, useEffect } from "react"
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { auth } from "../firebaseConfig"

export function login() {
  return signInWithPopup(auth, new GoogleAuthProvider())
}

export function logout() {
  return signOut(auth)
}

export function loggedInUserDisplayName() {
  return auth.currentUser.displayName
}

export function useAuthentication() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null)
    })
  }, [])
  return user
}

import { login, logout, loggedInUserDisplayName } from "../services/authService"

export function SignIn() {
  return <button onClick={login}>Sign In</button>
}

export function SignOut() {
  return (
    <div>
      Hello, {loggedInUserDisplayName()}  
      <button onClick={logout}>Sign Out</button>
    </div>
  )
}