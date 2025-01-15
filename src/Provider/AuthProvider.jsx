import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // google provider
    const googleProvider = new GoogleAuthProvider();

    // forcing to select account
    googleProvider.setCustomParameters({
        prompt: "select_account",
      });

    // gitHub provider

    const gitHubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }

    // google signIn 
     const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // gitHUb login
    const gitHubLogin = () =>{
        return signInWithPopup(auth, gitHubProvider)
    }

    const userUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name ,
            photoURL: photo
        })
    }
    
    const AuthInfo = {
        createUser,
        userUpdate,
        login,
        logout,
        googleLogin, gitHubLogin,
        user,
        loading
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unSubscribe();
    },[])
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;