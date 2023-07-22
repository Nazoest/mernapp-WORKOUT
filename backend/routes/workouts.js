const express=require('express')
const {
    createWorkout,
    getworkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutController') 

const router=express.Router()

//This is to get all workouts
router.get('/',getworkouts)
//to get a single id
router.get('/:id',getWorkout)


//POST a new workout
router.post('/',createWorkout)


//DELETE workout
router.delete('/:id',deleteWorkout)

//UPDATE a workout
router.patch('/:id',updateWorkout)

module.exports=router