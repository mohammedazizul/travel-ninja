import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
// FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// Firebase App
import firebase from "firebase/app";
// Adding the Firebase products
import "firebase/auth";
import firebaseConfig from "./FirebaseConfig/firebase.config"
import { useState } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

// conditional initalizing of firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        error: ''
    });

    // setting useContext value
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // to create an instance of the Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();

    // handel google sign in
    const handleGoogleSignIn = () => {
        // console.log("Google sign in clicked");
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // The signed-in user info.
                var googleUser = result.user;
                console.log(googleUser);
                const { displayName, email } = googleUser;
                const signedInUser = {
                    name: displayName,
                    email: email,
                    error: ''
                }
                setUser(signedInUser);
                console.log(user);
                setLoggedInUser(signedInUser)
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("Google Sign in error : ", errorCode, errorMessage);
            });
    }


    const handleSignOut = () => {
        // console.log("Sign out clicked");
        firebase.auth()
            .signOut().then(() => {
                // Sign-out successful.
                const signedOutUser = {
                    name: '',
                    email: '',
                    error: ''
                }
                setUser(signedOutUser);
                setLoggedInUser({});
            }).catch((error) => {
                // An error happened.
                console.log("Sign out error : ", error);
            });
    }

    return (
        <div>
                {
                    loggedInUser.email ?
                        <Button variant="primary" size="lg" onClick={handleSignOut}>Sign Out</Button>
                        : <Button variant="primary" size="lg" onClick={handleGoogleSignIn}>
                            Continue with &nbsp; <FontAwesomeIcon icon={faGoogle} />
                        </Button>
                }
                {
                    loggedInUser.email &&
                    <h2>Welcome, {loggedInUser.name}</h2>
                }
        </div>
    );
};

export default Login;