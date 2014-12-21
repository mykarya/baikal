/**
 * Created by shanu on 12/17/14.
 */
var pg = require('pg');

var conString = "postgres://postgres:brucy123@localhost/arsia_db";

module.exports = {
  query: function(text, values, callback) {
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('Error getting connection from connection pool', err);
      }
      // Execute query
      client.query(text, values, function(err, result) {
        //call `done()` to release the client back to the pool
        done();

        if(err) {
          return console.error('Error executing query', err);
        }
        callback(err,result);
      });
    });
  }
}
