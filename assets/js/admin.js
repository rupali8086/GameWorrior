 var config = {
	    apiKey: "AIzaSyBJEf-9pGFWooqFdxd-sLAkozFU-YV369M",
	    authDomain: "project-weeken-warrior.firebaseapp.com",
	    databaseURL: "https://project-weeken-warrior.firebaseio.com",
	    projectId: "project-weeken-warrior",
	    storageBucket: "project-weeken-warrior.appspot.com",
	    messagingSenderId: "11980125710"
	  };
	    
	firebase.initializeApp(config);

	// Create a variable to reference the database
	var database = firebase.database();

	var academy, gamename, gamedate, gametime, gameaddress, gamecity, gamezipcode;
	$("#addnewgame").on("click", function(event){

		academy = $("#academy").val().trim();
		gamename = $("#gameEvent").val().trim();
		gamedate = moment($("#gameDate").val().trim()).format('MM/DD/YYYY');
		gametime = $("#gameTime").val().trim();
		gameaddress = $("#gameLocation").val().trim();
		gamecity = $("#gameCity").val().trim();
		gamezipcode = $("#gameZipcode").val().trim();

		var gameinfo = {
			academy: academy,
			gamename: gamename,
			gamedate: gamedate,
			gametime: gametime,
			gameaddress: gameaddress,
			gamecity: gamecity,
			gamezipcode: gamezipcode
		}

		firebase.database().ref('games/'+academy+'/'+gamename).set(gameinfo);
	});

	database.ref('games/Baseball').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newgamename = childSnapshot.val().gamename;
	var newgameaddress = childSnapshot.val().gameaddress;
	var newgamecity = childSnapshot.val().gamecity;
	var newgamezipcode = childSnapshot.val().gamezipcode;
	var newgamedate = childSnapshot.val().gamedate;
	var newgametime = childSnapshot.val().gametime;
	var gameacademy = childSnapshot.val().academy;

	//write fields to html

	$("#baseball > tbody").append("<tr><td>" + newgamename + "</td><td>" + newgameaddress+", "+newgamecity + "</td><td>" + moment(newgamedate + " " + newgametime).format('MM/DD/YYYY HH:mm') + "</td></tr>");

    });	

    database.ref('games/Football').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newgamename = childSnapshot.val().gamename;
	var newgameaddress = childSnapshot.val().gameaddress;
	var newgamecity = childSnapshot.val().gamecity;
	var newgamezipcode = childSnapshot.val().gamezipcode;
	var newgamedate = childSnapshot.val().gamedate;
	var newgametime = childSnapshot.val().gametime;
	var gameacademy = childSnapshot.val().academy;

	//write fields to html

	$("#football > tbody").append("<tr><td>" + newgamename + "</td><td>" + newgameaddress+", "+newgamecity + "</td><td>" + moment(newgamedate + " " + newgametime).format('MM/DD/YYYY HH:mm') + "</td></tr>");

    });	

    database.ref('games/Soccer').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newgamename = childSnapshot.val().gamename;
	var newgameaddress = childSnapshot.val().gameaddress;
	var newgamecity = childSnapshot.val().gamecity;
	var newgamezipcode = childSnapshot.val().gamezipcode;
	var newgamedate = childSnapshot.val().gamedate;
	var newgametime = childSnapshot.val().gametime;
	var gameacademy = childSnapshot.val().academy;

	//write fields to html

	$("#soccer > tbody").append("<tr><td>" + newgamename + "</td><td>" + newgameaddress+", "+newgamecity + "</td><td>" + moment(newgamedate + " " + newgametime).format('MM/DD/YYYY HH:mm') + "</td></tr>");

    });	

    database.ref('games/Hockey').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newgamename = childSnapshot.val().gamename;
	var newgameaddress = childSnapshot.val().gameaddress;
	var newgamecity = childSnapshot.val().gamecity;
	var newgamezipcode = childSnapshot.val().gamezipcode;
	var newgamedate = childSnapshot.val().gamedate;
	var newgametime = childSnapshot.val().gametime;
	var gameacademy = childSnapshot.val().academy;

	//write fields to html

	$("#hockey > tbody").append("<tr><td>" + newgamename + "</td><td>" + newgameaddress+", "+newgamecity + "</td><td>" + moment(newgamedate + " " + newgametime).format('MM/DD/YYYY HH:mm') + "</td></tr>");

    });	
	var teamacademy, teamname, teamsize;
    $("#addnewteam").on("click", function(event){

		teamacademy = $("#teamacademy").val().trim();
		teamname = $("#teamname").val().trim();
		teamsize = $("#teamsize").val().trim();
		 
		var teaminfo = {
			academy: teamacademy,
			teamname: teamname,
			teamsize: teamsize,
			teamwin: 2,
			teamloss: 1
		}

		firebase.database().ref('teams/'+teamacademy+'/'+teamname).set(teaminfo);
	});

	database.ref('teams/Baseball').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newteamname = childSnapshot.val().teamname;
	var gameacademy = childSnapshot.val().academy;
	var teamwin = childSnapshot.val().teamwin;
	var teamloss = childSnapshot.val().teamloss;

	//write fields to html

	$("#teams > tbody").append("<tr><td>" + newteamname + "</td><td>" + gameacademy + "</td><td>" + teamwin +' / '+ teamloss +"</td></tr>");

	$("#teamacademy").val("");
	$("#teamname").val("");
	$("#teamsize").val("");

    });	
    database.ref('teams/Hockey').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newteamname = childSnapshot.val().teamname;
	var gameacademy = childSnapshot.val().academy;
	var teamwin = childSnapshot.val().teamwin;
	var teamloss = childSnapshot.val().teamloss;

	//write fields to html

	$("#teams > tbody").append("<tr><td>" + newteamname + "</td><td>" + gameacademy + "</td><td>" + teamwin +' / '+ teamloss +"</td></tr>");

	$("#teamacademy").val("");
	$("#teamname").val("");
	$("#teamsize").val("");

    });	
    database.ref('teams/Football').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newteamname = childSnapshot.val().teamname;
	var gameacademy = childSnapshot.val().academy;
	var teamwin = childSnapshot.val().teamwin;
	var teamloss = childSnapshot.val().teamloss;

	//write fields to html

	$("#teams > tbody").append("<tr><td>" + newteamname + "</td><td>" + gameacademy + "</td><td>" + teamwin +' / '+ teamloss +"</td></tr>");

	$("#teamacademy").val("");
	$("#teamname").val("");
	$("#teamsize").val("");

    });	
    database.ref('teams/Soccer').on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var newteamname = childSnapshot.val().teamname;
	var gameacademy = childSnapshot.val().academy;
	var teamwin = childSnapshot.val().teamwin;
	var teamloss = childSnapshot.val().teamloss;

	//write fields to html

	$("#teams > tbody").append("<tr><td>" + newteamname + "</td><td>" + gameacademy + "</td><td>" + teamwin +' / '+ teamloss +"</td></tr>");

	$("#teamacademy").val("");
	$("#teamname").val("");
	$("#teamsize").val("");
	});

	var phoneList = [];
	var emailList = [];
	var ref = firebase.database().ref('users');
    ref.once('value').then(function(snapshot) {
        snapshot.forEach(userSnapshot => {
            var k = userSnapshot.key;
            ref.child(k+"/parent").once("value", teamsSnapshot => {
            	console.log("Email Notification :: "+teamsSnapshot.val().emailnotify);
            	if(teamsSnapshot.val().emailnotify === "on"){
                    emailList.push(teamsSnapshot.val().email);
                    console.log("Email :: "+teamsSnapshot.val().email + emailList);
            	}
                console.log("Text Notification :: "+teamsSnapshot.val().textnotify);
             	if(teamsSnapshot.val().emailnotify === "on"){
                   	phoneList.push(teamsSnapshot.val().phone);
                    console.log("Phone :: "+teamsSnapshot.val().phone + phoneList);
                }
            });
        });
    });

    //   $("#emailNotification").on("click", function(event){
	// 		event.preventDefault();


	  var twilioURL = encodeURI('https://api.twilio.com/2010-04-01/Accounts/ACf541d846122b00cf1b3008b10b0aed5f/Messages.json');
      var SID = 'ACf541d846122b00cf1b3008b10b0aed5f';
      var Key = '403ebd7116f88af782649c9559d4617e'

    $("#textNotification").on("click", function(event){
		event.preventDefault();
		for (var i = 0; i < phoneList.length; i++) {
			var phNmbr = "+1" + phoneList[i];
			console.log("PHONE NUMBER ::" + phNmbr);
		    $.ajax({
		      url: twilioURL,
		      type: 'POST',
		      data: {
		        "To" : phNmbr,
		        "From" : "+19782917568",
		        "Body" : "Today's game is cancelled because of weather"
		      },
		      beforeSend: function (xhr) {
		        xhr.setRequestHeader ("Authorization", "Basic " + btoa(SID + ':' + Key));
		      },
		      success: function (data) {
		        console.log(data);
		        },
		      error: function(){
		         console.log("Cannot get data");
		      }

	    	}).then(function(response) {
	        	var results = response;
	    	});
		}
    });	