// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCPIWW0Syddw9fSAsDFouSRWVg4NA2NWEg",
    authDomain: "choochoo-f239e.firebaseapp.com",
    databaseURL: "https://choochoo-f239e.firebaseio.com",
    projectId: "choochoo-f239e",
    storageBucket: "choochoo-f239e.appspot.com",
    messagingSenderId: "484231892032"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


//submitting to the button 
  $(document).on("click", ".submit", function(event){
 event.preventDefault();
    var nameI = $("#nameInput").val().trim();
    var destI = $("#destinationInput").val().trim();
    var freqI = $("#frequencyInput").val().trim();
    var fTI = $("#firstTrainInput").val().trim();
    //Time function is calling the minutes away, not in firebase
        //var minAway =$(".minAway").val().trim().text(tMinutesTillTrain);

  //from the users input
  var newTrain ={
    train: nameI ,
    destination: destI,
    frequency:freqI,
    firstTrain: fTI
    };

    //pushing the data of the object newTrain to firebase
    database.ref().push(
        newTrain
    )
    console.log(newTrain);
  });
//best practice to put outside the onclick
  database.ref().on("child_added", function(snapshot, previous){
    console.log(snapshot.val());
    console.log(snapshot.val().train);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().frequency);
    console.log(snapshot.val().firstTrain);

    //attempted to mimic the full member list style on activity recent users with all users (line 155)
        // $("#fullActiveTrainList").append("<div > <tr scope='row'> <td class='name'></td>" +
        // childSnapshot.val().train + "<td class='dest'></td>" + 
        // childSnapshot.val().destination + "<td class='freq'></td>" + 
        // childSnapshot.val().frequency + "<td class='fTrain'></td>" + 
        // childSnapshot.val().firstTrain + "</tr></div>");
    
    //not currently being appended to the last entry, it is taking it's place on teh screen
    $(".name").text(snapshot.val().train);
    $(".dest").text(snapshot.val().destination);
    $(".freq").text(snapshot.val().frequency);
    $(".fTrain").text(snapshot.val().firstTrain);

    //calling Time function inside the database.ref()
    Time(snapshot.val().firstTrain, snapshot.val().frequency);
}, 
//added errorObject function just in case something goes wonky
function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


function Time(firstTime, tFrequency){
    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
        $(".currentTime").text(currentTime);//not sure if I would need to display this so I made it a text if needed
    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
     //placing on html
        $(".minAway").text(tMinutesTillTrain);
    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
};
