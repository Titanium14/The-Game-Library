const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyAaVktEkcGn0w2716RRdUHHsF6h8qRfgDI",
  authDomain: "the-game-library.firebaseapp.com",
  databaseURL: "https://the-game-library.firebaseio.com",
  storageBucket: "the-game-library.appspot.com",
  messagingSenderId: "863496599360"
};

const fire = firebase.initializeApp(config);

exports.default = fire;
