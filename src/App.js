import {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  const [workoutList, setWorkoutList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/workouts')
    .then(r => r.json())
    .then(data => setWorkoutList(data))
  }, [])

  const displayList = [...workoutList].sort((a, b) => {
    const date1 = a.date.replaceAll('-','')
    const date2 = b.date.replaceAll('-','')

    if (date1 > date2) {
      return -1
    }
    else if (date1 < date2) {
      return 1
    }
    else {
      return 0
    }}
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
