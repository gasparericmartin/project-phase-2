import './WorkoutCard.css'

function WorkoutCard({workout}) {
    const {id, type, length, location, notes, imgUrl} = workout
    
    return (
        <div className='card'>
            <h2>{type}</h2>
            <h2>{length}</h2>
            <h2>{location}</h2>
            <p>{notes}</p>
        </div>
    )
}

export default WorkoutCard