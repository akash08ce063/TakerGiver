exports.updatetake = function(req,res){


  console.log("params"+ req.params.name);
  console.log("params"+req.params.email);
  console.log("params"+req.params.checkbox);
  //console.log("params"+ req.params.email);
  var oldname = req.params.oldname ;
  var name= req.params.name;
  var address = req.params.email ;
  var items = req.params.checkbox ;


  var mysql= require('mysql');
  var databasecon = require('../databaseconfig');
  var connection = mysql.createConnection(databasecon.databaseconfigg);

    connection.connect();

   var strQuery = "UPDATE `takers`  SET `name` = '"+name+"',`email`='"+address+"',`items`='"+items+"' WHERE `name`='"+oldname+"'";
   connection.query( strQuery, function(err, rows){
      if(err) {
        throw err;
      }else{
            
      /////
        json14 = JSON.stringify("{data:send}");
        console.log(json14);

        res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
    
         res.write(json14);

         res.end();
          connection.end();

      }

      
   });
 
   
   
}