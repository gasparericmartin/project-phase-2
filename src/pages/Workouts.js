import { useState, useEffect} from 'react'
import WorkoutCard from '../components/WorkoutCard'
import AddWorkout from '../components/AddWorkout'
import './Workouts.css'


function Workouts() {
    const [workoutList, setWorkoutList] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:3001/workouts')
      .then(r => r.json())
      .then(data => setWorkoutList(data))
    }, [])

    function postWorkout(postObj) {
      fetch('http://localhost:3001/workouts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(postObj)
      })
      .then(r => r.json())
      .then(data => setWorkoutList([...workoutList, data]))
    }
    
    
    return (
      <>
      <h1>Your Workouts</h1>
      <button className='button'>Add Workout</button>
      
      {workoutList.map((workout) => {
        return <WorkoutCard key={workout.id} workout={workout} />
      })}
      <AddWorkout postWorkout={postWorkout}/>
      </>
    );
}

export default Workouts