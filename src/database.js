const mysql = require('mysql');

const mysqlConnection =  mysql.createPool({
    host: 'byjtegxht44daenmhuv8-mysql.services.clever-cloud.com',
    port: '3306',
    user: 'uvgyzdh23of6df1f',
    password: 'cgYoOZAKBxokAh4D9G8S',
    database: 'byjtegxht44daenmhuv8'
});

module.exports  = mysqlConnection;