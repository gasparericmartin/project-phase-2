import { useOutletContext } from "react-router-dom"

function Home() {
    const [workoutList, setWorkoutList, displayList] = useOutletContext()

    function daysElapsed() {
        const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
        const lastWorkout = new Date(displayList[0].date.replaceAll('-', ','))
        const daysElapsed = (today - lastWorkout) / (1000 * 60 * 60 * 24)

        return daysElapsed
    }

    return (
        <>
            <h1>Home</h1>
            <p>
                It's been {displayList[0] ? daysElapsed() : 'Loading'} day(s) since you last worked out.
            </p>
        </>
    )
}

export default Home