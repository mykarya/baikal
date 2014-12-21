'use strict';

var _ = require('lodash');
var uuid = require('node-uuid');

var pgres = require('../../db/pgres');


/**
 * Get all Users
 * @param req
 * @param res
 */
exports.index = function(req, res) {
  pgres.query("select * from arsia_user","",function(allUsers){
    //res.json([]);
    res.json(allUsers);
  })
};

/**
 * Login User
 * @param req
 * @param res
 */
exports.login = function(req,res) {
  var email = req.body.email;
  var pwd = req.body.password;

  var existingUser={};

  console.log("User login with email:" + email);

  pgres.query("SELECT * FROM arsia_user WHERE email = $1 AND password = $2", [email,pwd],function(err,result){
    if(result && result.rows.length == 1){
      existingUser = result.rows[0];
      existingUser.message = "success";
    }
    else {
      existingUser.message = "Didn't find ya. Try again!"
    }
    res.send(existingUser);
  });
};

/**
 * SignUp User
 * @param req
 * @param res
 */
exports.signUp = function(req,res) {
  var name = req.body.name;
  var email = req.body.email;
  var pwd = req.body.password;
  var id = uuid.v1();
  var creation_ts = new Date();

  var newUser = {};

  // First check if user already exists.
  pgres.query("SELECT * FROM arsia_user WHERE email = $1", [email], function (err, result) {
    // Error finding User.
    if(err){
      newUser.message = "Error in SignUp, try again!";
      res.send(newUser);
    }

    // User already exist
    if (result && result.rows.length == 1) {
      newUser.message = "Email in use!";
      res.send(newUser);
    }

    // Insert new User
    else {
      console.log("User signUp with email:" + email);

      pgres.query("INSERT INTO arsia_user(id, name, email, password, creation_ts) values($1, $2, $3, $4, $5)",
        [id, name, email, pwd, creation_ts], function (err, result) {
          if(err){
            newUser.message = "Error in SignUp, try again!";
            res.send(newUser);
          }
          else {
            newUser.id = id;
            newUser.message = "success";
            res.send(newUser);
          }
        });
    }
  });
};
