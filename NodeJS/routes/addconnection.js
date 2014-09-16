exports.addcon = function(req,res){

//	console.log("params"+ req.params.user1);
//	console.log("params"+req.params.user2);
//	console.log("params"+req.params.checkbox);
	//console.log("params"+ req.params.email);

	var giver = req.params.user1;
	var taker = req.params.user2;

	// res.send("This is the data part" + req.params.n);

	 var mysql =  require('mysql');
	 //mysql.connect();


	var databasecon = require('../databaseconfig');
	var connection = mysql.createConnection(databasecon.databaseconfigg);



	 console.log(mysql);
	 connection.connect();

	 

	var strQuery = "INSERT INTO  `connection`(`giver_name`,`taker_name`,`state`) VALUES('"+giver+"','"+taker+"','saved')  ";	
  
  	connection.query( strQuery, function(err, rows){
  		if(err)	{
  			throw err;
  		}else{
  			json4 = JSON.stringify(rows);
  			console.log( "jason data" + json4 );
  			res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
    

    		res.write(JSON.stringify({x: 5, y: 6}));
    		res.end();


  		}

  		connection.end();
 	 });


}