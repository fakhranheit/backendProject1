const kriptopassword = require("../helper/kriptopassword");
const { mysqldb } = require("../connection");
module.exports = {
  registeruser: (req, res) => {
    var { username, password, email } = req.body;
    // console.log("masuk sini");
    var sql = `select username,email from users where username='${username}' or email='${email}' `;
    // console.log(email);
    mysqldb.query(sql, (err, results) => {
      // console.log(results);
      if (err) {
        return res.status(500).send({ status: "error", err });
      }
      if (results.length > 0) {
        // console.log(results);
        return res.status(200).send({ status: "error register", message: "username or email has been taken" });
      } else {
        var hashpassword = kriptopassword(password);
        var dataUser = {
          username,
          password: hashpassword,
          email,
          status: "unverified",
          role: 'user'
        };
        sql = `insert into users set ?`;
        mysqldb.query(sql, dataUser, (err1, res1) => {
          if (err1) {
            return res.status(500).send({ status: "error", message: "error server", err: err1 });
          }
          return res.status(200).send({ status: "success" });
        });
      }
    });
  },
  login: (req, res) => {
    var { username, password } = req.query;
    var { id } = req.params;
    // console.log(password);
    if (id) {
      var sql = `select * from users where id=${id}`;
      // console.log(id);
      mysqldb.query(sql, (err, result) => {
        if (err) {
          console.log("error");
          throw err;
        }
        // console.log("ini ", result);
        if (result.length > 0) {
          return res.status(200).send({ id: result[0].id, username: result[0].username, password: result[0].password, role: result[0].role, status: "login berhasil" });
        } else {
          return res.status(500).send({ status: "error", message: "username atau password salah", err });
        }
      });
    } else {
      var hashpassword = kriptopassword(password);
      var sql = `select * from users where username='${username}' and password='${hashpassword}'`;
      mysqldb.query(sql, (err, result) => {
        if (err) {
          // console.log(hashpassword);
          throw err;
        }
        // console.log("ini ", result);
        if (result.length > 0) {
          return res.status(200).send({ id: result[0].id, username: result[0].username, password: result[0].password, role: result[0].role, status: "login berhasil" });
        } else {
          return res.status(200).send({ status: "error", message: "username atau password salah" });
        }
      });
    }
  }
};
