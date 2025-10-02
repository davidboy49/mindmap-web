// Firebase Email/Password authentication example for a web application.
// This snippet uses the Mind Map Studio project's configuration and demonstrates
// how to register and sign in users with Firebase Authentication.
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAREf7cLuVnm_hAoOfSPg8Ffuwbq5Vazwk",
  authDomain: "mindmap-app-cb1f7.firebaseapp.com",
  databaseURL: "https://mindmap-app-cb1f7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mindmap-app-cb1f7",
  storageBucket: "mindmap-app-cb1f7.firebasestorage.app",
  messagingSenderId: "899953173069",
  appId: "1:899953173069:web:f3f4e0988445cea4b1b204",
};

// Initialize Firebase and the auth instance.
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/**
 * Creates a new user with the provided email and password.
 */
export async function signUpUser(email, password) {
  try {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Sign-up successful", credential.user);
    return credential.user;
  } catch (error) {
    console.error("Sign-up failed", error.code, error.message);
    throw error;
  }
}

/**
 * Signs in an existing user with the provided email and password.
 */
export async function signInUser(email, password) {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Sign-in successful", credential.user);
    return credential.user;
  } catch (error) {
    console.error("Sign-in failed", error.code, error.message);
    throw error;
  }
}

// Listen for auth state changes.
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user.email);
  } else {
    console.log("No user is currently signed in.");
  }
});

// Example usage for testing purposes.
(async () => {
  try {
    await signUpUser("super@example.com", "Nor45222");
  } catch (error) {
    // Ignore error if the user already exists.
    if (error.code !== "auth/email-already-in-use") {
      return;
    }
  }

  await signInUser("super@example.com", "Nor45222");
})();
