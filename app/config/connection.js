var mysql = require('mysql');

function Connection() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      //connectionLimit: 140,
      //connectionLimit: 140,
      connectionLimit: 500,
      //host: '10.5.0.35',
      //port : '3306',
      host: '127.0.0.1',
      port: '7001',
      user: 'dbuser',
      password: 'MyDbPassword!23',
      database: 'test'
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new Connection();
