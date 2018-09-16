import { auth } from "./firebase";

export const createUserWithEmailAndPassword = (email, password) => (
  auth.createUserWithEmailAndPassword(email, password)
);

export const singInWithEmailAndPassword = (email, password) => (
  auth.signInWithEmailAndPassword(email, password)
);

export const signOut = () => (
  auth.signOut()
);

export const passwordReset = (email) => (
  auth.sendPasswordResetEmail(email)
);

export const changePassword = (password) => (
  auth.currentUser.changePassword(password)
);