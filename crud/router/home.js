const express = require('express')
const router = express.Router()
let data =  [{id:1,nama:'mhusen', kelas:'TI.15.D2'},{id:2,nama:'riski', kelas:'TI.15.D2'},{id:3,nama:'irfan', kelas:'TI.15.D2'}]
router.get('/', (req,res) => {
    return res.render('pages/index',{
        error: false,
        hasil: data,
      })

})

router.get('/delete/:id', (req,res) => {
    data.splice(req.params.id-1,1);
    console.log(req.params.id)
    return res.render('pages/index',{
        error: false,
        hasil: data,
      })

})


router.post('/', (req,res) => {
    console.log(req.body)
    let id = data.length +1
    let data_baru = {id:id, nama: req.body.nama, kelas: req.body.kelas}
    data.push(data_baru) 
    return res.render('pages/index',{
        error: false,
        hasil: data,
      })
})

module.exports = router