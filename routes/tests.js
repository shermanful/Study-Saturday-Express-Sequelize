const router = require('express').Router();
const Testt = require('../db/models/tests');


router.get('/', async(req, res, next) => {
    try{
        const students = await Student.findAll()
        res.send(students)
    }catch(error){
        next(error)
    }
})

module.exports = router;
