import {useState, useEffect} from 'react'

function App() {
  const [workoutList, setWorkoutList] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/workouts')
    .then(r => r.json())
    .then(data => setWorkoutList(data))
  }, [])
  
  
  return (
    <>
    <h1>Here I am</h1>
    {workoutList.map((workout) => {
      return <p key={workout.id}>{workout.type}</p>
    })}
    </>
  );
}

export default App;
