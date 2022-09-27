var express = require('express');
var router = express.Router(); 

var pool = require('../db/database');

/* GET home page. */
router.get('/', function(req, res, next) {

	pool.query('SELECT VERSION()', (err, version_results) => {

		if (err) {
			return console.error('Error executing query', err.stack);
		}
		res.render('index', {title: "Connor Curry's HW3", database_version: version_results.rows[0].version });

	})
	
	res.render('index', { title: "Connor Curry's HW3" });
});

module.exports = router;
