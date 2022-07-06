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

export const registerUser = async (email, password, userInfo, profileImage) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth, email, password
    );

    // console.log(userCredentials);

    const uid = userCredentials.user.uid;
    // await setDoc(doc(firestore, "users", uid), userInfo);
    await userDetails(userInfo, uid);
    await uploadProfileImage(profileImage, uid);
  } 
  catch (error) {
    throw error
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
    throw error
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

export const userDetails = async (userInfo, uid) => {
  try {
    await setDoc(doc(firestore, "users", uid), userInfo);

  } catch(error) {
    // An error happened.
    console.log(error)
  };
};

export const uploadProfileImage = async (image, uid) => {
  try {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });

    const imagesRef = ref(storage, `images/${uid}`);
    await uploadBytes(imagesRef, blob);
  } catch (error) {
    console.log(error);
  }
};