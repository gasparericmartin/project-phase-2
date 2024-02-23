import './WorkoutCard.css'

function WorkoutCard({workout}) {
    const {id, type, length, location, notes, imgUrl} = workout
    
    return (
        <div 
            className='card' 
            onClick={() => console.log(new Date().toDateString())}>
            <h2>{type}</h2>
            <h2>{length} minutes</h2>
            <h2>{location}</h2>
            <p>{notes}</p>
        </div>
    )
}

export default WorkoutCard