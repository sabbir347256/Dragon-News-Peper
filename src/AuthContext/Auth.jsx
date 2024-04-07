import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Dragon-Firebase/Firebase.config";
import PropTypes from 'prop-types'

export const AuthContext = createContext(null);

const Auth = ({children}) => {
    const [user,setUser] = useState(null);

    const auth = getAuth(app);

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('Current user is stay here',currentUser)
            setUser(currentUser);
        });
        return() =>{
            unSubscribe();
        }
    },[])
    
    const logout = () =>{
        return signOut(auth);
    }

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo ={
        user,
        createUser,
        logout,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
Auth.propTypes ={
    children : PropTypes.object
}
export default Auth;