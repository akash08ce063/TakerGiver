exports.tgive=  function(req,res){

	var name= req.params.name;
  var items = req.params.item ;

	var mysql= require('mysql');
	var connection1 = mysql.createConnection({
  			  host : "us-cdbr-east-05.cleardb.net",
        user : "b92521e8ca1fc4",
        password: "5d7b5582",
        database : 'heroku_ef1aa411bc0b466',
        debug : true,
  	});

  var databasecon = require('../databaseconfig');
  var connection = mysql.createConnection(databasecon.databaseconfigg);



  	connection.connect();

  	

   var strQuery = "SELECT COUNT(*) AS `count` FROM `taker_give` WHERE `taker_name`='"+name+"'";	
  
  	connection.query( strQuery, function(err, rows){
  		if(err)	{
  			throw err;
  		}else{

            console.log("the counts" + rows[0].count);
		  			
            var query;  
      
            if(rows[0].count>=1){
              // update query
                 query = "UPDATE `taker_give` SET `give_item`='"+items+"' WHERE `taker_name`='"+name+"'" ; 
            }else{
              // insert query
                query = "INSERT INTO `taker_give` (`taker_name`,`give_item`) VALUES('"+name+"','"+items+"')" ;
            }
            connection1.connect();
          connection1.query( query,function(err, rowss){
          
          if(err) {
            throw err;
          }else{
            json23 = JSON.stringify(rowss);
            console.log( "jason data" + json23 );
            res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
    
            res.write(json23);

            res.end();

                    connection.end( );


    connection1.end();


          }
        });





  		}
 	 });

}