// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDdC_e4zwAyhAzCGu_olBHQtkyub10YZhY",
    authDomain: "time-sheet-act17.firebaseapp.com",
    databaseURL: "https://time-sheet-act17.firebaseio.com",
    projectId: "time-sheet-act17",
    storageBucket: "",
    messagingSenderId: "11679940248"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submit-btn").on("click",function(){
  	event.preventDefault();

  	var newName = $("#employee-name").val().trim()
  	console.log(newName);
  	var newRole = $("#employee-role").val().trim()
  	console.log(newRole);
  	var newStartDate = $("#employee-start-date").val().trim()
  	console.log(newStartDate);
  	var newRate = $("#employee-rate").val().trim()
  	console.log(newRate);
  });