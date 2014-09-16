exports.mail=  function(req,res){

var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: "akashkpatel1991@gmail.com",
       pass: "belaMAMI1991"
   }
});

smtpTransport.sendMail({
   from: "akashkpatel1991@gmail.com", // sender address
   to: "akashkpatel1991@gmail.com", // comma separated list of receivers
   subject: "Hello ✔", // Subject line
   text: "Hello world ✔  <a href='http://www.google.com/' />", // plaintext body
   html:"<html><body><button> Click me! </button> </body></html>"
}, function(error, response){
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);

   }
});


}