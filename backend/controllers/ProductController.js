const { mysqldb } = require("../connection");
const fs = require('fs')
const { uploader } = require('../helper/uploader')

module.exports = {
    postGame: (req, res) => {
        try {
            const path = "/game/images"
            const upload = uploader(path, 'GAME').fields([{ name: 'image' }])

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
                // console.log('pathnya', imagePath)
                var sql = 'insert into game set ?'
                mysqldb.query(sql, data, (err, res2) => {
                    if (err) {
                        return res.status(500).json({
                            message: 'there is an error on the server',
                            error: err.message
                        })
                    }
                    // sql = 'select * from game'
                    sql = 'select gr.namaGenre,gm.namaGame,gm.deskripsi,gm.foto from genre gr join game gm on gm.genreId=gr.id'
                    mysqldb.query(sql, (err1, result1) => {
                        if (err1) res.status(500).send(err1)
                        res.status(200).send({ dataGame: result1 })
                    })
                })
            })
        }
        catch (error) {
            console.log('tes')
            res.status(200).send({ status: error, message: 'there is a problem with the uploader' })
        }
    },
    postGenre: (req, res) => {
        console.log('masuk post genre')
        var { namaGenre } = req.body
        var data = {
            namaGenre
        }
        var sql = `insert into genre set ?`
        mysqldb.query(sql, data, (err, res1) => {
            if (err) {
                console.log(err)
                return res.status(500).send({ status: err })
            }
            sql = 'select * from genre'
            mysqldb.query(sql, (err1, result1) => {
                if (err1) res.status(500).send(err1)
                res.status(200).send({ result1 })
            })
        })

    },
    getGenre: (req, res) => {
        var sql = 'select * from genre'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(res1)
        })
    },
    deleteGenre: (req, res) => {
        // console.log('masuk delete genre')
        var selectedId = req.params.selectedId
        // console.log(selectedId);
        var sql = `select * from genre where id=${selectedId}`
        mysqldb.query(sql, (err, res1) => {
            if (err) {
                return res.status(500)
            }
            // console.log(res1);

        })

        sql = `delete from genre where id=${selectedId}`
        mysqldb.query(sql, (err2, res2) => {
            if (err2) {


                return res.status(500)
            }
            console.log('deleted', res2);

            sql = `select * from genre`
            mysqldb.query(sql, (err3, res3) => {
                if (err3) {
                    return res.status(500)
                }
                // console.log('genre terupdate', res3);

                return res.status(200).send({ datagenre: res3 })
            })
        })

    },
    getGame: (req, res) => {
        var sql = 'select gr.namaGenre,gm.namaGame,gm.deskripsi,gm.foto,gm.id,gm.harga,gm.tanggalUpload from genre gr join game gm on gm.genreId=gr.id'
        mysqldb.query(sql, (err, res1) => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(res1)
        })
    },
    getDetailGame: (req, res) => {
        var id = req.params.id
        var sql = `select gr.namaGenre,gm.namaGame,gm.deskripsi,gm.foto,gm.id,gm.harga from genre gr join game gm on gm.genreId=gr.id where gm.id=${id}`
        mysqldb.query(sql, (err, res1) => {
            if (err) {
                // console.log(err)
                return res.status(500).send(err)
            }
            console.log(res1);
            return res.status(200).send(res1)
        })
    },
    deleteGame: (req, res) => {
        console.log('masuk delete')
        var selectedId = req.params.selectedId
        console.log(selectedId)
        var sql = `select * from game where id=${selectedId}`;
        mysqldb.query(sql, (err, result1) => {
            // console.log('berhasil delete')
            if (err) {
                console.log('problem', err);
                return res.status(500).send(err);
            }
            console.log(result1[0])
            console.log('alamat foto deletenya', result1[0].Foto)
            var imagePath = result1[0].Foto
            sql = `delete from game where id=${selectedId}`;
            mysqldb.query(sql, (err, result) => {
                if (err) {
                    console.log(err.message);
                    return res.status(500).json({
                        message: "there's an error on the server",
                        err: err.message
                    });
                }
                //kalo imagenya ada
                if (imagePath) {

                    fs.unlinkSync(`./public` + imagePath)
                }
                console.log(result);
                sql = `select gr.namaGenre,gm.namaGame,gm.deskripsi,gm.foto,gm.id from genre gr join game gm on gm.genreId=gr.id`;
                mysqldb.query(sql, (err, result3) => {
                    if (err) res.status(500).send(err);
                    res.status(200).send({ dataProduct: result3 });
                });
            });
        })

    },
    editGame: (req, res) => {
        var { selectedidEdit } = req.params
        console.log('id', selectedidEdit)
        var sql = `select * from game where id=${selectedidEdit}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            // console.log(res1)
            // return res.status(200).send(res1)
            if (res1.length) {
                const path = "/game/images"
                const upload = uploader(path, 'GAME').fields([{ name: 'image' }])

                upload(req, res, (err) => {
                    if (err) return res.status(500).json({ message: 'server error' })
                    const { image } = req.files
                    const imagePath = image ? path + "/" + image[0].filename : null
                    console.log('ini reqbody', req.body.data)
                    const data = JSON.parse(req.body.data)

                    try {
                        if (imagePath) {
                            data.Foto = imagePath
                        }
                        sql = `update game set ? where id=${selectedidEdit}`
                        mysqldb.query(sql, data, (err, res2) => {
                            if (err) {
                                if (imagePath) {
                                    fs.unlinkSync(`./public${imagePath}`)
                                }
                                return res.status(500).json({ message: 'server error' })
                            }
                            if (imagePath) {
                                if (res1[0].Foto) {
                                    fs.unlinkSync(`./public${res1[0].Foto}`)
                                }
                            }

                            sql = `select gr.namaGenre,gm.namaGame,gm.deskripsi,gm.foto,gm.id from genre gr join game gm on gm.genreId=gr.id`
                            mysqldb.query(sql, (err, res3) => {
                                if (err) return res.status(500).send(err)
                                return res.status(200).send(res3)
                            })
                        })
                    } catch (error) {
                        console.log(error)
                    }
                })

            }
        })
    },
    getLatestGame: (req, res) => {
        var sql = 'select gr.*,gm.* from game gm join genre gr on gm.genreId=gr.id order by tanggalUpload DESC LIMIT 0, 3;'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(res1)
        })
    },
    addCart: (req, res) => {
        var { gameid, userid } = req.body

        var data = {
            gameid,
            userid,
            status: 'waiting'
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
    },
    getDetailCart: (req, res) => {
        var id = req.params.id
        console.log('masuk sini', id);
        var sql = `SELECT u.id,u.username,t.id as idtransaksidetail,g.*,t.status,t.userid FROM users u join transactiondetail t on t.userid=u.id join game g on g.id=t.gameid where u.id=${id}`
        mysqldb.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            console.log(result);
            return res.status(200).send(result)
        })
    },
    deleteCart: (req, res) => {
        var id = req.params.id
        // console.log(id);
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
            totalharga
        }

        // console.log(data);

        console.log('ini iduser', iduser, 'ini totalharga', totalharga);
        var sql = `INSERT INTO transactions set ?`
        mysqldb.query(sql, data, (err, result) => {
            if (err) return res.status(500).send(err)
            var data2 = {
                idtransaction: result.insertId,
                status: 'on process'
            }

            console.log(result.insertId);

            sql = `UPDATE transactiondetail set ? where userid=${iduser} and status='waiting' `
            mysqldb.query(sql, data2, (err1, result1) => {
                if (err1) res.status(500).send(err1)
            })
        })

    }
}
