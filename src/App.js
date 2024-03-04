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
    const date1 = new Date(a.date.replaceAll('-',', ')).getTime()
    const date2 = new Date(b.date.replaceAll('-',', ')).getTime()

    console.log(date1)
    console.log(date2)

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

  console.log(displayList)
  
  return(
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={{workoutList, setWorkoutList, displayList}} />
    </>
  )
}

export default App;
