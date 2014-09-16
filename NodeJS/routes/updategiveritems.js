
exports.updategiveitem = function(req,res){


  //console.log("params"+ req.params.email);
  var name= req.params.name;
  var items = req.params.checkbox ;


  var mysql= require('mysql');
 var databasecon = require('../databaseconfig');
	var connection = mysql.createConnection(databasecon.databaseconfigg);


    connection.connect();

   var strQuery = "UPDATE `givers`  SET `items`='"+items+"' WHERE `name`='"+name+"'";
   connection.query( strQuery, function(err, rows){
      if(err) {
        throw err;
      }else{
            
      /////
      		 res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
    
		     res.write(JSON.stringify({x: 5, y: 6}));

		     res.end();
		     connection.end();
      }

      
   });
   json20 = JSON.stringify("{data:send}");
   console.log(json20);

    
   
}