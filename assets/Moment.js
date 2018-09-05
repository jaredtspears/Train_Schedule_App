//will need to set up a function relating to incoming arrivals that are current.
//then set up one that is live. do the same for the departures. 
//fuction will need to be incommunication with firebase

//created objects corresponding to variables of Arrivals and Departures
const Arrivals = {
    name: [],//will be added by admin
    destination: ["RDU"],//destinations are all the same on the arrivals
    //setting to a number hopeful to represent 6am later
    firstTrainTime:{
        //in military time broken into AM or PM
        am: ["1","2","3","4","5","6","7","8","9","10","11", "12"],
        pm: ["13","14","15","16","17","18","19","20","21","22","23", "24"]
    },
    //trying to break into minutes figured each hr is 60 min so it would be a 1/60th of an hr
    frequency: 1%60,
    status: {
        //not sure how to arrainge the ontime or delayed notice
        onTime: " On Time ",
        delayed: " Delayed "
    }
}
const Departures = {
    name: [],//will be added by admin
    /*destination is specific cities added by admin like: 
                        "Detroit", "Pitsburg", "Raleigh", "Durham",
                        "Atlanta", "DC", "NYC", "Orlando", "Chicago", 
                        "Miami", "Nashville", "Greensburo", "LA", "Dallas", "Tampa" */
    destination: [],
    //setting to a number hopeful to represent 6am later
    firstTrainTime:{
        //in military time broken into AM or PM
        am: ["1","2","3","4","5","6","7","8","9","10","11", "12"],
        pm: ["13","14","15","16","17","18","19","20","21","22","23", "24"]
    },
    //trying to break into minutes figured each hr is 60 min so it would be a 1/60th of an hr
    frequency: 1%60,
    status: {
        //not sure how to arrainge the ontime or delayed notice
        ontime: " On Time ",
        delayed: " Delayed "
    }
}
    //bare bone call to the above Arrival or Departures create [object:object]
    // if consologing into the object like line 37 it works and I can see the array
    console.log("This is the Arrivals Object: " + Arrivals.firstTrainTime.am);
    console.log("This is the Departures Object: " + Departures);

//Arrivals Main function
function renderArrivals(){
    //will run through object of Arrivals by either name, destination or first_train_time
    for(var key in Arrivals){
        if(Arrivals.hasOwnProperty(name)){
            //create a name peramiter (have an open array)

            console.log("this should be the name array for arrivals " + name[key]);
        } else if(Arrivals.hasOwnProperty(aDestination)){
            //create a destination peramiter (have an open array)
        } else if(Arrivals.hasOwnProperty(first_train_time.am)){
            //creating a loop to run and catch am times (MIGHT NOT NEED)
            for(i=0;i>11; i++){
            $("#live_updates_Arrivals").text(first_train_time.am + "AM")
            console.log(first_train_time.am);
            }
        } else if(Arrivals.hasOwnProperty(first_train_time.pm)){
            //creating a loop to run and catch pm times (MIGHT NOT NEED)
            for(i=0;i>11; i++){

            }
        }else if(Arrivals.hasOwnProperty(status)){
            if(onTime){
                //making var ticketHolderStatus equal to odd times only
                var ticketHoldersStatus = Arrivals.firstTrainTime.am["1","3","5","7","9","11"] ||
                                          Arrivals.firstTrainTime.pm["14","15","17", "19", "21", "23"];
                    console.log(ticketHoldersStatus);
                FirstTrainTime != ticketHoldersStatus;
                     console.log(onTime);
            }
        }
    }
}

renderArrivals();
console.log(renderArrivals);