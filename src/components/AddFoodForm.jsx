import { useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';

function AddFoodForm(props) {

    const [name, setName] = useState('')
    const [calories, setCalories] = useState('')
    const [image, setImage] = useState('')
    const [servings, setServings] = useState('')


    const handleName = (event) => setName(event.target.value)
    const handleCalories = (event) => setCalories(event.target.value)
    const handleImage = (event) => setImage(event.target.value)
    const handleServings = (event) => setServings(event.target.value)

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.addFood( name, calories, image, servings )
    }


    return (
        <div className='alignForm'>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input id='name ' value={name} type="text" onChange={handleName} />
                </div>
                <div>
                    <label htmlFor="calories">Clories</label>
                    <Input id='calories' value={calories} type="text" onChange={handleCalories} />
                </div>
                <div>
                <label htmlFor="image">Image</label>
                <Input id='image' value={image} type="text" onChange={handleImage} />
        </div>
        <div>
                <label htmlFor="servings">Serving</label>
                <Input id='servings' value={servings} type="text" onChange={handleServings} />
        </div>
        <button>Add Food</button>
            </form >

        </div >
    )
}

export default AddFoodForm;