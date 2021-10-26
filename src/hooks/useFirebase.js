import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Your password must be 8-20 characters long.');
            return;
        };
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 upper case');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Password must contain 1 one special case letter.');
            return;
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Password must contain 2 two digits.');
            return;
        }
        if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
            setError('Password must contain 3 lowercase letters.');
            return;
        }
        isLogin ? processSignIn(email, password) : registerNewUser(email, password);
    }

    // create new user
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUserName();
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // login with email and password
    const processSignIn = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .finally(() => setIsLoading(false));
    }

    //set new user name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                setUser(result?.user);
            });
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    // google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return {
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        error,
        toggleLogin,
        isLogin,
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        setUser,
        setIsLoading,
    }
}
export default useFirebase;