exports.giverin=  function(req,res){

	var name= req.params.name;

	var mysql= require('mysql');
	var databasecon = require('../databaseconfig');
  var connection = mysql.createConnection(databasecon.databaseconfigg);

  	connection.connect();

  	

   var strQuery = "SELECT * FROM `givers` WHERE `name`='"+name+"'";	
  
  	connection.query( strQuery, function(err, rows){
  		if(err)	{
  			throw err;
  		}else{
		  			json21 = JSON.stringify(rows);
		  			console.log(json21);

            res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
    
            res.write(json21);

            res.end();
              connection.end( );

  
  		}
 	 });
  	



}