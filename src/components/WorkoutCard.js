import './WorkoutCard.css'

function WorkoutCard({workout}) {
    const {id, date, type, length, location, notes, imgUrl} = workout

    const displayDate = {
                        year: date.slice(0, 4),
                        month: date.slice(-5, -3),
                        day: date.slice(-2)
    }
    
    return (
        <div className='card'>
            <h4>{displayDate.month}/{displayDate.day}/{displayDate.year}</h4>
            <h2>{type}</h2>
            <h3>{length} minutes</h3>
            <h3>{location}</h3>
            <p>{notes}</p>
        </div>
    )
}

export default WorkoutCard