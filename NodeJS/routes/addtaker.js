exports.addtake = function(req,res){

	console.log("params"+ req.params.name);
	console.log("params"+req.params.email);
	console.log("params"+req.params.checkbox);
	//console.log("params"+ req.params.email);

	var name= req.params.name;
	var address = req.params.email ;
	var items = req.params.checkbox ;


	var mysql= require('mysql');
	var databasecon = require('../databaseconfig');
	var connection = mysql.createConnection(databasecon.databaseconfigg);


  	connection.connect();

   var strQuery = "INSERT INTO `takers` (`name`,`email`,`items`) VALUES('"+name+"','"+address+"','"+items+"')";
   connection.query( strQuery, function(err, rows){
  		if(err)	{
  			throw err;
  		}else{
		  			
			/////
			 json7 = JSON.stringify("{data:send}");
   			console.log(json7);

			res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
   	
   	 		res.write(json7);

     		res.end();


    connection.end();
  		}

  		
 	 });
  
    

}