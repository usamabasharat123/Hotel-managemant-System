
// //Create Database connection with mongo db 

// const config={
//     production :{
//         SECRET: process.env.SECRET,
//         DATABASE: process.env.MONGODB_URI
//     },
//     default : {
//         SECRET: 'mysecretkey',
// 	   // DATABASE: 'mongodb+srv://algram:algram@cluster0.nwthj.mongodb.net/carspector?authSource=admin&replicaSet=atlas-q8039b-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'
// 	     DATABASE: 'mongodb://localhost/bms' //locally mongodb
//     }
// }


// exports.get = function get(env){
//     return config[env] || config.default
// }

var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'HMS'
});
try{
connection.connect(function(error){
	if(!!error) {
		console.log(error);
        console.log("DB not connected")
	} else {
		console.log('Connected..!');
	}
});
}catch(ex){
    console.log(ex)
    
    console.log("DB not connected")
}

module.exports = connection;