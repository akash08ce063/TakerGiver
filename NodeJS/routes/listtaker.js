exports.listtake = function(req,res){
	var multiple;

	var mysql= require('mysql');
	var databasecon = require('../databaseconfig');
  var connection = mysql.createConnection(databasecon.databaseconfigg);


  	connection.connect();

  	

   var strQuery = "SELECT `name` FROM `takers`";	
  
  	connection.query( strQuery, function(err, rows){
  		if(err)	{
  			throw err;
  		}else{
		  			json2 = JSON.stringify(rows);
		  			console.log(json2);
			/////

           res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
          
           res.write(json2);

           res.end();
           connection.end( );
  

  		}

 	 });

  	
 var connection1 = mysql.createConnection({
  			  host : "us-cdbr-east-05.cleardb.net",
        user : "b92521e8ca1fc4",
        password: "5d7b5582",
        database : 'heroku_ef1aa411bc0b466',
        debug : true,
  	});
 	
  

}