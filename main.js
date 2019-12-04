// Paste the code from Firebase 
var config = {
     apiKey: "AIzaSyCl6UdHKnidkaF2Wpw5T3ueMKtesunf_ww",
    authDomain: "dec052019.firebaseapp.com",
    databaseURL: "https://dec052019.firebaseio.com",
    projectId: "dec052019",
    storageBucket: "dec052019.appspot.com",
    messagingSenderId: "710289473887"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact66');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	comment: $('.com99').val(),

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});