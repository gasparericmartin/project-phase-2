import {useState, useEffect} from 'react'

function App() {
  const [fighterList, setFighterList] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/fighters')
    .then(r => r.json())
    .then(data => setFighterList(data))
  }, [])
  
  
  return (
    <>
    <h1>Here I am</h1>
    {fighterList.map((fighter) => {
      return <p key={fighter.id}>{fighter.name}</p>
    })}
    </>
  );
}

export default App;
