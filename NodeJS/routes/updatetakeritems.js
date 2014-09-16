
exports.updatetakeritem = function(req,res){


  //console.log("params"+ req.params.email);
  var name= req.params.name;
  var items = req.params.checkbox ;


  var mysql= require('mysql');
  var databasecon = require('../databaseconfig');
  var connection = mysql.createConnection(databasecon.databaseconfigg);


    connection.connect();

   var strQuery = "UPDATE `taker_give`  SET `taker_give`='"+items+"' WHERE `name`='"+name+"'";
   connection.query( strQuery, function(err, rows){
      if(err) {
        throw err;
      }else{
            
      /////
             json21 = JSON.stringify("{data:send}");
             console.log(json21);


            res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
    
             res.write(json21);

             res.end();


               connection.end();
      }

      
   });

   

}