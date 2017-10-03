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
  	var newRate = parseInt($("#employee-rate").val().trim())
    console.log(newRate);
    var newEmp = {
      name: newName,
      role: newRole,
      start: newStartDate,
      rate: newRate,
      currentDate: firebase.database.ServerValue.TIMESTAMP
    }
  	database.ref().push({
      employee: newEmp
    })
    // $("#formID").empty();
 
  });
   database.ref().on("child_added", function (child) {
    var tempName = child.val().employee.name;
    var tempRole = child.val().employee.role;
    var tempStart = child.val().employee.start;
    var tempRate = child.val().employee.rate;
    var monthsWorked = moment(tempStart).format("YYYY,MM,DD");
    console.log(moment(monthsWorked).fromNow());
    
   var newRow = $("<tr>");
   var newNamediv = $("<td>").text(tempName);
   newRow.append(newNamediv);
   $("#info-table").append(newRow);

  })
   
   
  
 


