/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 


const config = {
  apiKey: "AIzaSyAUQIjZgHnomtwMZu69m_WAL8-W0LAFjOQ",
  authDomain: "video-f8e85.firebaseapp.com",
  projectId: "video-f8e85",
  storageBucket: "video-f8e85.appspot.com",
  messagingSenderId: "1097876293447",
  appId: "1:1097876293447:web:0cb54e07812addf2ddae62"
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}