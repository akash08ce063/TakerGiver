exports.tg=  function(req,res){

	var name= req.params.name;

	var mysql= require('mysql');
	var databasecon = require('../databaseconfig');
  var connection = mysql.createConnection(databasecon.databaseconfigg);

  

  	connection.connect();

  	

   var strQuery = "SELECT * FROM `taker_give` WHERE `taker_name`='"+name+"'";	
  
  	connection.query( strQuery, function(err, rows){
  		if(err)	{
  			throw err;
  		}else{
		  			json22 = JSON.stringify(rows);
		  			console.log(json22);

            res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
    
            res.write(json22);

            res.end();
              connection.end( );

  		}
 	 });
  	

}