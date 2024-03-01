import {useState} from 'react'
import './AddWorkout.css'

function AddWorkout() {
    const [formData, setFormData] = useState({
                                    id: '',
                                    type: '',
                                    length: '',
                                    location: '',
                                    notes: '',
                                    imgUrl: ''
    })

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                
                <input 
                    type='text'
                    placeholder='Type'
                    value={formData.name}
                    name='type'
                    onChange={handleChange}
                />
                
                
                <input 
                    type='number'
                    placeholder='Length'
                    value={formData.name}
                    name='length'
                    onChange={handleChange}
                />
                
                <input 
                    type='text'
                    placeholder='Location'
                    value={formData.name}
                    name='location'
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    placeholder='Notes'
                    value={formData.name}
                    name='notes'
                    onChange={handleChange}
                />
                <input 
                    type='url'
                    placeholder='Image'
                    value={formData.name}
                    name='imgUrl'
                    onChange={handleChange}
                />
                
               
                <input type='submit'/>
            </form>
        </>
    )
}

export default AddWorkout