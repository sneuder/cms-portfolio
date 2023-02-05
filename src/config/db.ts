import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDxyJRM_NSAfXFqZG2xtSfQ7RjWvx0VBb0',
  authDomain: 'cms-portfolio-2bbbc.firebaseapp.com',
  projectId: 'cms-portfolio-2bbbc',
  storageBucket: 'cms-portfolio-2bbbc.appspot.com',
  messagingSenderId: '823259287565',
  appId: '1:823259287565:web:81789e00f8ecb92a1ec544',
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

export default fb;
