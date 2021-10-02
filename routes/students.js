const { restore } = require('sinon');
const Student = require('../db/models/student');
const router = require('express').Router();


// const app = express()
// const {Students} = require("/students") 

// *** TIME TO MAKE THESE ROUTES***
// ➢ get ‘/’
// ➢ get ‘/:id’
// ➢ post ‘/’
// ➢ put ‘/:id’
// ➢ delete ‘/:id’

router.get('/', async(req, res, next) => {
    try{
        const students = await Student.findAll()
        res.send(students)
    }catch(error){
        next(error)
    }
})

router.get('/:id', async(req, res, next) => {
    try{
        let student = await Student.findByPk(req.params.id)
        if(student){
            res.send(student)
        }
        else{
            res.status(404).send("Student not found")
        }
        
    }catch(error){
        next(error)
    }
})

router.post('/', async(req, res, next) => {
    try{
        let student = await Student.create(req.body)
        res.status(201).send(student)       
    }catch(error){
        next(error)
    }
})

router.put('/:id', async(req, res, next) => {
    try{
        let updatedStudentInfo = await Student.update(req.body, {
          where:{id: req.params.id},
          returning: true, 
          plain: true,  
        })
        res.send(updatedStudentInfo[1])       
    }catch(error){
        next(error)
    }
})
router.delete('/:id', async(req, res, next) => {
    try{
        await Student.destroy({where: {id: req.params.id}})
        res.sendStatus(204)
              
    }catch(error){
        next(error)
    }
})


module.exports = router;
