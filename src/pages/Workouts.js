import { useState, useEffect} from 'react'
import WorkoutCard from '../components/WorkoutCard'
import AddWorkout from '../components/AddWorkout'


function Workouts() {
    const [workoutList, setWorkoutList] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:3001/workouts')
      .then(r => r.json())
      .then(data => setWorkoutList(data))
    }, [])
    
    
    return (
      <>
      <h1>Your Workouts</h1>
      {workoutList.map((workout) => {
        return <WorkoutCard key={workout.id} workout={workout} />
      })}
      <AddWorkout />
      </>
    );
}

export default Workouts