exports.ConMain=  function(req,res){
	var mysql= require('mysql');
	var databasecon = require('../databaseconfig');
	var connection = mysql.createConnection(databasecon.databaseconfigg);


  	connection.connect();

  	

   var strQuery = "SELECT * FROM `connection`";	
  
  	connection.query( strQuery, function(err, rows){
  		if(err)	{
  			throw err;
  		}else{
		  			json9 = JSON.stringify(rows);
		  			console.log(json9);
			/////


				  	 res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
				   	
				   	 res.write(json9);

				     res.end();


  	connection.end( );
 	
  		}

  		
 	 });

 
 	
  



}