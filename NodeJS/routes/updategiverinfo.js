exports.updategive = function(req,res){


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

   var strQuery = "UPDATE `givers`  SET `email`='"+address+"',`name`='"+name+"',`items`='"+items+"' WHERE `name`='"+oldname+"'";
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
   json13 = JSON.stringify("{data:send}");
   console.log(json13);

    
}