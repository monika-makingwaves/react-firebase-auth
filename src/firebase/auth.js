import { authFirebase } from "./firebase";

export const createUserWithEmailAndPassword = (email, password) => {
  return authFirebase.createUserWithEmailAndPassword(email, password)
};

export const singInWithEmailAndPassword = (email, password) => (
  authFirebase.signInWithEmailAndPassword(email, password)
);

export const signOut = () => (
  authFirebase.signOut()
);

export const passwordReset = (email) => (
  authFirebase.sendPasswordResetEmail(email)
);

export const changePassword = (password) => (
  authFirebase.currentUser.updatePassword(password)
);

export const onAuthStateChanged = () => {
  return new Promise((resolve, reject) => {
    authFirebase.onAuthStateChanged((user) => {
      if(user) {
        resolve(user);
      } else {
        reject (new Error('Ops! No user logged in.'));
      }
    })
  });
};