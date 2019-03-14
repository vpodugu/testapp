var todo = require('../models/transactions');

module.exports = {
  configure: function(app) {
    app.get('/transactions',function(req,res) {
      todo.get(res);
    });
    app.get('/transactions/:id',function(req,res) {
      todo.getByID(req.params.id,res);
    });
    app.post('/transactions',function(req,res) {
      todo.create(req.body,res);
    });
    app.put('/transactions/:id',function(req,res) {
      todo.update(req.body.name,req.params.id,res);
    });
    app.delete('/transactions/:id',function(req,res) {
      todo.delete(req.params.id,res);
    });
  }
};
