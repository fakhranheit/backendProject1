const { mysqldb } = require("../connection");
const fs = require('fs')
const { uploader } = require('../helper/uploader')
const paginate = require('jw-paginate')

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

                //jika ada error saat upload makan akan menghapus foto yg ada di .public/
                if (err) {
                    fs.unlinkSync("./public" + imagePath);
                    return res
                        .status(500)
                        .json({ message: 'upload gagal', error: err.message })
                }

                var sql = 'insert into game set ?'
                mysqldb.query(sql, data, (err, res2) => {
                    if (err) {
                        return res.status(500).json({
                            message: 'there is an error on the server',
                            error: err.message
                        })
                    }

                    sql = 'select gr.namaGenre,gm.namaGame,gm.deskripsi,gm.foto,gm.id from genre gr join game gm on gm.genreId=gr.id'
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
                                return res.status(500).send({ message: 'server error' })
                            }
                            if (imagePath) {
                                if (res1[0].Foto) {
                                    fs.unlinkSync(`./public${res1[0].Foto}`)
                                }
                            }

                            sql = `select gr.namaGenre,gm.namaGame,gm.deskripsi,gm.foto,gm.id,gm.tanggalUpload,gm.harga from genre gr join game gm on gm.genreId=gr.id`
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
        var sql = 'select gr.*,gm.* from game gm join genre gr on gm.genreId=gr.id order by tanggalUpload DESC LIMIT 0, 5;'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(res1)
        })
    },
    getStore: (req, res) => {
        //menghitung jumlah banyaknya data 
        const sqlCount = `SELECT COUNT(*) AS count FROM game`

        let dataCount
        mysqldb.query(sqlCount, (err, result) => {
            if (err) res.status(500).send(err)
            dataCount = result[0].count

            //trigger pindah page
            const page = parseInt(req.params.page) || 1
            const pageSize = 9;
            const pager = paginate(dataCount, page, pageSize)

            //untuk limit database
            let offset;
            if (page === 1) {
                offset = 0
            } else {
                offset = pageSize * (page - 1)
            }

            //syntax sql untuk get data
            sql = `select gr.namaGenre,gm.namaGame,gm.deskripsi,gm.foto,gm.id,gm.harga,gm.tanggalUpload from genre gr join game gm on gm.genreId=gr.id LIMIT ? OFFSET ?`

            mysqldb.query(sql, [pageSize, offset], (err1, result2) => {
                if (err) res.status(500).send(err1)

                const pageOfData = result2;
                return res.status(200).send({ pageOfData, pager })
            })
        })
    }
}

