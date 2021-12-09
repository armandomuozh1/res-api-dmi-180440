const mysql = require('mysql');

const mysqlConnection =  mysql.createConnection({
    host: 'byjtegxht44daenmhuv8-mysql.services.clever-cloud.com',
    port: '3306',
    user: 'uvgyzdh23of6df1f',
    password: 'cgYoOZAKBxokAh4D9G8S',
    database: 'byjtegxht44daenmhuv8'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB esta conectada');
    }
});

module.exports  = mysqlConnection;