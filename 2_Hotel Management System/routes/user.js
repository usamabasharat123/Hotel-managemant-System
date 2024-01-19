var express = require("express");
var router = express.Router();

const dbcon = require("../config/config");

router.post("/add", (req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const password = req.body.password;
  const address = req.body.address;
  const email = req.body.email;
  const salary = req.body.salary;
  const phone = req.body.phone;
  var form_data = {
    username: username,
    password: password,
    name: name,
    address: address,
    email: email,
    salary: salary,
    phone: phone,
  };
  console.log(req.body);

  dbcon.query("INSERT INTO user SET ?", form_data, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ success: false, error: err });
    } else {
      res.status(200).json({
        success: true,
        message: "User created sucessfully",
        user: result,
      });
    }
  });
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  var form_data = {
    username: username,
    password: password,
  };
  console.log(req.body);

  dbcon.query(
    `SELECT * FROM user WHERE username='${username}' AND password='${password}'`,
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ success: false, error: err });
      } else {
        res.status(200).json({
          success: true,
          message: "Login sucessfully",
          user: result[0],
        });
      }
    }
  );
});

router.get("/getAll", (req, res) => {
  dbcon.query("SELECT * FROM user ", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ success: false, error: err });
    } else {
      res.status(200).json({
        success: true,
        user: result,
      });
      console.log(result);
    }
  });
});

router.put("/edit/:id", (req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const password = req.body.password;
  const address = req.body.address;
  const email = req.body.email;
  const salary = req.body.salary;
  const phone = req.body.phone;
  const id = req.params.id;
  var form_data = {
    username: username,
    password: password,
    name: name,
    address: address,
    email: email,
    salary: salary,
    phone: phone,
  };
  console.log(req.body);

  dbcon.query("UPDATE user SET ? where id=" + id, form_data, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ success: false, error: err });
    } else {
      res.status(200).json({
        success: true,
        message: "user updated sucessfully",
        user: result,
      });
    }
  });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  dbcon.query("DELETE FROM user where id=" + id, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ success: false, error: err });
    } else {
      res.status(200).json({
        success: true,
        message: "User deleted sucessfully",
        user: result,
      });
    }
  });
});

module.exports = router;
