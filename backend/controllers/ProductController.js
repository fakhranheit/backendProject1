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
                    // console.log('masuk sini')
                    // console.log(res2)
                    // return res.status(200).send({ status: "OK" })
                    sql = 'select gr.namaGenre,gm.namaGame,gm.deskripsi,gm.foto from genre gr join game gm on gm.genreId=gr.id'
                    // sql = 'select * from game'
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
    getGenre: (req, res) => {
        var sql = 'select * from genre'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(res1)
        })
    },
    getGame: (req, res) => {
        var sql = 'select gr.namaGenre,gm.namaGame,gm.deskripsi,gm.foto from genre gr join game gm on gm.genreId=gr.id'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(res1)
        })
    }
}
