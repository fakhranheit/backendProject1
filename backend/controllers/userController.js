const { mysqldb } = require("../connection");
const fs = require('fs')
const { uploader } = require('../helper/uploader')
const paginate = require('jw-paginate')

module.exports = {
    addCart: (req, res) => {
        console.log('masuk sini');

        var { gameid, userid } = req.body

        var data = {
            gameid,
            userid,
            status: 'on cart'
        }

        console.log('tes', req.body)
        var sql = `select * from transactiondetail where gameid=${gameid} and userid=${userid}`
        mysqldb.query(sql, (err1, res1) => {
            if (err1) return res.status(500).send(err1)
            if (res1.length > 0) {
                console.log('masuk data dobel', res1.length);
                return res.status(200).send({ message: 'item sudah ada di cart' })
            }
            var sql = `insert into transactiondetail set ?`
            mysqldb.query(sql, data, (err2, res2) => {
                if (err2) return res.status(500).send(err2)
                return res.status(200).send({ res2, message: 'item berhasil ditambahkan' })
            })
        })
    }, getDetailCart: (req, res) => {
        var id = req.params.id
        console.log('masuk sini', id);
        var sql = `SELECT u.id,u.username,t.id as idtransaksidetail,g.*,t.status,t.userid FROM users u join transactiondetail t on t.userid=u.id join game g on g.id=t.gameid where u.id=${id} and t.status='on cart'`
        mysqldb.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            console.log(result);
            return res.status(200).send(result)
        })
    },
    deleteCart: (req, res) => {
        var id = req.params.id
        console.log(id);
        var sql = `delete from transactiondetail where id=${id}`
        mysqldb.query(sql, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }
            console.log(result);
            return res.status(200).send(result)
        })
    },
    checkoutCart: (req, res) => {
        var iduser = req.params.iduser
        // console.log(iduser);

        var { totalharga } = req.body
        var data = {
            iduser,
            totalharga,
            paymentstatus: 'waiting upload'
        }

        console.log('ini iduser', iduser, 'ini totalharga', totalharga);
        var sql = `INSERT INTO transactions set ?`
        mysqldb.query(sql, data, (err, result) => {
            if (err) return res.status(500).send(err)

            var data2 = {
                idtransaction: result.insertId,
                status: 'on process'
            }

            console.log(result.insertId);

            sql = `UPDATE transactiondetail set ? where userid=${iduser} and status='on cart'`
            mysqldb.query(sql, data2, (err1, result1) => {
                if (err1) res.status(500).send(err1)
            })
            return res.status(200).send(result)
        })

    },
    getTotalHarga: (req, res) => {
        var id = req.params.id
        console.log(id);
        var sql = `select id,totalharga from transactions where iduser=${id} and paymentstatus='waiting upload'`
        mysqldb.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            console.log(result);
            return res.status(200).send(result)
        })

    },
    postTransaction: (req, res) => {
        var idtrans = req.params.idtrans
        try {
            const path = "/game/images"
            const upload = uploader(path, 'TRANS').fields([{ name: 'image' }])

            upload(req, res, err => {
                const { image } = req.files
                const imagePath = image ? path + "/" + image[0].filename : null
                const data = JSON.parse(req.body.data)
                console.log(data)
                data.Foto = imagePath
                if (err) {
                    fs.unlinkSync("./public" + imagePath);
                    return res
                        .status(500)
                        .json({ message: 'upload gagal', error: err.message })
                }

                var sql = `UPDATE transactions set ? WHERE id=${idtrans}`
                mysqldb.query(sql, data, (err, res2) => {
                    if (err) {
                        return res.status(500).json({
                            message: 'there is an error on the server',
                            error: err.message
                        })
                    }
                })
            })
            var data2 = {
                status: 'waiting confirmation'
            }
            console.log(data2);
            sql = `UPDATE transactiondetail set ? where idtransaction=${idtrans} and status='on process' `
            mysqldb.query(sql, data2, (err1, result1) => {
                if (err1) res.status(500).send(err1)
                return res.status(200).send(result1)
            })
        }
        catch (error) {
            console.log('tes')
            res.status(200).send({ status: error, message: 'there is a problem with the uploader' })
        }
    },
    getPurchasedGame: (req, res) => {
        var { iduser } = req.params

        var sql = `SELECT td.userid,td.status,gm.namaGame,gm.Foto,gm.deskripsi 
                   FROM transactiondetail td join game gm on gm.id=td.gameid 
                   WHERE td.userid=${iduser} and td.status='purchased' ORDER BY gm.namaGame`

        mysqldb.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            console.log(result);
            return res.status(200).send(result)
        })
    }
}