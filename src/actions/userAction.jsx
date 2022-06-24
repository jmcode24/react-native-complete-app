import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { doc, setDoc} from 'firebase/firestore';
import { auth, firestore, storage } from '../firebase/config';
import { ref, uploadBytes } from 'firebase/storage';

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const registerUser = async (email, password) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth, email, password
    );

    console.log(userCredentials);

    const uid = userCredentials.user.uid;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth, email, password
    );
    console.log(userCredentials)
    
    const user = userCredentials.user;
  }
  catch(error) {
    console.log(error);
  };
};

export const logout = async () => {
  try {
    await signOut(auth)

    console.log(signOut(auth));

  } catch(error) {
    // An error happened.
    console.log(error)
  };
};