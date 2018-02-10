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