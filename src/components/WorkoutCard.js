

function WorkoutCard({workout}) {
    const {id, type, length, location, notes, imgUrl} = workout
    return (
        <>
            <h2>{type}</h2>
            <h2>{length}</h2>
            <h2>{location}</h2>
            <p>{notes}</p>

        </>
    )
}

export default WorkoutCard