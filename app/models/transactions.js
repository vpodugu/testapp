var connection = require ('../config/connection');

var randomstring = require('randomstring');
var moment = require('moment');

function transaction() {
  this.get = function(res) {
    connection.acquire(function(err,con) {
      con.query('select * from Transactions LIMIT 10', function(err,result) {
        con.release();
        res.send(result);
        console.log("Get successful");
      });
    });
  };
  this.getByID = function(id,res) {
    connection.acquire(function(err,con) {
      //con.query('select * from Transactions where id = ?', id, function(err,result) {
	con.query('select t_id, t_field_1,t_field_20,t_date_1 from Transactions where t_id = ( select max(t_id) from Transactions )', function(err,result) {
        con.release();
        res.send(result);
        console.log("Get by ID successful");
      });
    });
  };
  this.create = function(transaction,res) {
//	console.log(transaction);
    connection.acquire(function(err,con) {

	//ignore incoming data and insert a random string
        //con.query('insert into Transactions (t_data) values(?)', transaction.data, function(err,result) {
	//console.log(moment().valueOf());
      con.query('insert into Transactions (t_field_1, t_field_2, t_field_3 , t_field_4, t_field_5, ' + 
				't_field_6, t_field_7, t_field_8, t_field_9, t_field_10, ' + 
				't_field_11,  t_field_12, t_field_13, t_field_14, t_field_15, ' + 
				't_field_16, t_field_17, t_field_18, t_field_19, t_field_20 ' + 
				') values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            [randomstring.generate(),  randomstring.generate(),  randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate(), randomstring.generate()], function(err,result) {
        con.release();
        if (err) {
	 console.log(err);
          res.send({status:1, message:'Transaction creation fail'});
        } else {
          res.send({status:0, message:'Transaction create success'});
 //         console.log("Post successful");
        }
      });
    });
  };
  this.update = function(transaction,id,res) {
    connection.acquire(function(err,con) {
      con.query('update Transactions set t_data = ? where id = ?', [transaction.data, id], function(err,result) {
        con.release();
        if (err) {
          res.send({status:1, message:'transaction update fail'});
        } else {
          res.send({status:0, message:'transaction update success'});
          console.log("Put successful");
        }
      });
    });
  };
  this.delete = function(id,res) {
    connection.acquire(function(err,con) {
      con.query('delete from Transactions where id = ?', id, function(err,result) {
        con.release();
        if (err) {
          res.send({status:1, message:'transaction delete fail'});
        } else {
          res.send({status:0, message:'transaction delete success'});
          console.log("Delete successful");
        }
      });
    });
  };
};

module.exports = new transaction();

