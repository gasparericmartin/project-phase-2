import {useState, useEffect} from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  const [workoutList, setWorkoutList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/workouts')
    .then(r => r.json())
    .then(data => setWorkoutList(data))
  }, [])

  const displayList = workoutList.toSorted((a, b) => {
    return a.date.replaceAll('-','') - b.date.replaceAll('-','')}
  )
  
  return(
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={[workoutList, setWorkoutList, displayList]} />
    </>
  )
}

export default App;
