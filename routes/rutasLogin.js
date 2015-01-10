var express = require('express');
var mysql = require('mysql');

var rutasLogin = express.Router();

//----------------------------------------------
var pool = mysql.createPool({
  connectionLimit : 100,
  host     : '10.66.6.240',
  user     : 'ricardo',
  password : 'ricardo'
});
//----------------------------------------------

rutasLogin.route('/')
.get(function(req, res){

	pool.query("SELECT * FROM gtr.infocde WHERE REGION = 'CENTRO'", function(err, rows, fields) {
	  	if (err) throw err;
	  	res.json(rows);
	});
});

rutasLogin.route('/cdelist')
.get(function(req, res){

	var query = "SELECT Cod_Pos, Regional, Ciudad, Tienda FROM bd_cded_cde_pda.tiendas";
	
	pool.query(query, function(err, rows, fields) {
	  	if (err) throw err;
	  	res.json(rows);
	});
});

module.exports = rutasLogin;