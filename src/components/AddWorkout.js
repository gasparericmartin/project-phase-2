import {useState} from 'react'
import './AddWorkout.css'

function AddWorkout({postWorkout}) {
    const [formData, setFormData] = useState({
                                    date: '',
                                    type: '',
                                    length: '',
                                    location: '',
                                    notes: '',
    })

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        const postObj = {
                        id: '',
                        date: formData.date,
                        type: formData.type,
                        length: formData.length,
                        location: formData.location,
                        notes: formData.notes,
        }
        
        postWorkout(postObj)
    }
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                
                <input 
                    type='text'
                    placeholder='Type'
                    value={formData.type}
                    name='type'
                    onChange={handleChange}
                />
                
                
                <input 
                    type='number'
                    placeholder='Length'
                    value={formData.length}
                    name='length'
                    onChange={handleChange}
                />
                
                <input 
                    type='text'
                    placeholder='Location'
                    value={formData.location}
                    name='location'
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    placeholder='Notes'
                    value={formData.notes}
                    name='notes'
                    onChange={handleChange}
                />
                <input 
                    type='date'
                    placeholder='Date'
                    value={formData.date}
                    name='date'
                    onChange={handleChange}
                />
                
               
                <input type='submit'/>
            </form>
        </>
    )
}

export default AddWorkout