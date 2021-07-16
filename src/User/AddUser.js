import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";
const AddUser = props => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState()

    const nameChangeHandler = (evt) =>{
        setName(evt.target.value);
    }
    const ageChangeHandler = (evt) =>{

        setAge(evt.target.value);
    }

    const onConfirm = props =>{
        setError(null);
    }

    const AddUserHandler = (evt) =>{

        evt.preventDefault();
        if(name.trim().length === 0 || age.trim().length === 0){
            setError({
                title:"Invalid Entry",
                message:"Enter Valid Name and Age"
            })
            return;
        }
        if(+age < 1){
            setError({
                title:"Invalid Age",
                message:"Age needs to be greater than 0 (>0)"
            })
            return;
        }

        props.addUserItem(name, age);
        setName('');
        setAge('');

    }

    return <div>
        {error && (<ErrorModal title = {error.title} message = {error.message} onConfirm = {onConfirm}></ErrorModal>)};
        <Card className = {classes.input}>
        <form onSubmit = {AddUserHandler}>
            <label htmlFor = 'Name'>Name</label>
            <input id = "Name" onChange = {nameChangeHandler} value = {name} type = 'text'></input>
            <label htmlFor = 'Age' >Age</label>
            <input type = 'number' id = "Age" onChange = {ageChangeHandler} value = {age}></input>
            <Button title = 'Add User'></Button>
        </form>
    </Card>
        </div>
}
export default AddUser;