const express = require('express'); 
const mysql = require('mysql2');
require ('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.DBPORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err) => {
    if(err){
        console.log(err)
    } else {
        console.log('Conexion exitosa')
    }
});

connection.query('SELECT * FROM `productos` WHERE `id` = 1', function(error, results, fields){
    if(error) throw error
    results.forEach(r => {
        console.log(r)
    })
})

connection.end();