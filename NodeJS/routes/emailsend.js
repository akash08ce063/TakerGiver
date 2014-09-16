exports.sending=  function(req,res){

	var name= req.params.name;
	var kind =req.params.kind;
	var sendername = req.params.oldname;

	var mysql= require('mysql');
	var databasecon = require('../databaseconfig');
	var connection = mysql.createConnection(databasecon.databaseconfigg);


  	connection.connect();

  	console.log(kind);
 

	var strQuery ;
   	if(kind == "takers"){
   	   strQuery = "SELECT `email` FROM `takers` WHERE name ='"+name+"'";	
  	}else if(kind == "givers") {
  		 strQuery = "SELECT `email` FROM `givers` WHERE name ='"+name+"'";	
  	}else{


				  	res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
				   	
				   	res.write(JSON.stringify("Data does't exist"));

				    res.end();


  	}



  	connection.query( strQuery, function(err, rows){
  		if(err)	{
  			throw err;
  		}else{

  					console.log(rows[0].email);

  					console.log("Sendername" + sendername);

  					var nodemailer = require("nodemailer");

					var smtpTransport = nodemailer.createTransport("SMTP",{
					   service: "Gmail",
					   auth: {
					       user: "akashkpatel1991@gmail.com",   // put auth here
					       pass: "belaMAMI1991"
					   }
					});

					smtpTransport.sendMail({
					   from: "akashkpatel1991@gmail.com", // put your smtp email address or your address
					   to: rows[0].email, //  receivers email 
					   subject: "Message from '"+kind+" from take-give app'✔", // Subject line
					   text: "Hello '"+sendername+"' want to connect with you! please visit the app. />", // plaintext body
					   html:"<html><body><button> Click me! </button> </body></html>"
					}, function(error, response){
					   if(error){
					       console.log(error);
					       	res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
				   			res.write(JSON.stringify("Problem with mail sending"));
							res.end();
					   }else{
					   		res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
				   			res.write(JSON.stringify("Sucessfully send the mail"));
				    		res.end();

					   }
					});

				  

  						connection.end( );
  		}
 	 });




}