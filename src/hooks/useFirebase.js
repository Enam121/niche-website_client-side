import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState('')
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const signUp = (name, email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setAuthError('');
        saveUser(email, name);
        const newUser = { email, displayName: name };
        setUser(newUser);

        updateProfile(auth.currentUser, {
          displayName: name
        })
          .then(() => { })
          .catch((error) => { });

      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));

  }

  const signIn = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        setAuthError('');
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));

  }

  const signingOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));

  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({});
      }
      setLoading(false);
    })

  }, [])


  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(result => console.log(result))
  }

  useEffect(() => {
    fetch(`http://localhost:5000/admin/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))

  }, [user.email])

  return {
    signUp,
    signIn,
    signingOut,
    user,
    authError,
    loading,
    admin
  }

};

export default useFirebase;