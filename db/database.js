const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:Guitar424@db-hw3.cvzrcka38lw5.eu-west-1.rds.amazonaws.com:5432/postgres'
const pool = new Pool({
  connectionString,
})


module.exports = pool;
