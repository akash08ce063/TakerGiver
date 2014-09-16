exports.updatecon = function(req,res){

//	console.log("params"+ req.params.user1);
//	console.log("params"+req.params.user2);
//	console.log("params"+req.params.checkbox);
	//console.log("params"+ req.params.email);


 

	var giver = req.params.user1;
	var taker = req.params.user2;


  console.log("Taker" + taker);
  console.log("Giver" +giver);
	// res.send("This is the data part" + req.params.n);

	 var mysql =  require('mysql');
	 //mysql.connect();


	var databasecon = require('../databaseconfig');
  var connection = mysql.createConnection(databasecon.databaseconfigg);



	 console.log(mysql);
	 connection.connect();

	 

	var strQuery = "SELECT `state` FROM  `connection` WHERE `taker_name`='"+taker+"' AND `giver_name`='"+giver+"'  ";	
  
  	connection.query( strQuery, function(err, rows){
  		if(err)	{
  			throw err;
  		}else{

          var query ; 
          
          if(rows[0].state == "saved"){
            query= "UPDATE `connection` SET `state`='semi-connected' WHERE `taker_name`='"+taker+"' AND `giver_name`='"+giver+"' ";  
          }else{
             query= "UPDATE `connection` SET `state`='connected' WHERE `taker_name`='"+taker+"' AND `giver_name`='"+giver+"' ";  
            
          }
            // console.log("sucess");
            //var query = "UPDATE `connection` SET `state`='semi-connected' WHERE `taker_name`='"+taker+"' AND `giver_name`='"+giver+"' ";  
    
            connection1.connect();  
            connection1.query( query, function(err, rowss){
           // console.log("multiplications - " + multiple);

            if(err) {
              throw err;
            }else{
              json10 = JSON.stringify(rowss);
              console.log( "jason data" + json10 );

              res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
    

              res.write(JSON.stringify({x: 5, y: 6}));
              res.end();


          connection.end();
          connection1.end();
            }
         });
        
              
  		}

 	 });



 var connection1 = mysql.createConnection({
      host : "us-cdbr-east-05.cleardb.net",
        user : "b92521e8ca1fc4",
        password: "5d7b5582",
        database : 'heroku_ef1aa411bc0b466',
        debug : true,
    });

  //   connection1.end();



}