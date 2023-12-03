import css from './Feedback.module.css';
import {useState} from "react";

export const Feedback () => {
    const [feedback, setCounter] = useState(0);

    return (
        <div>
        <button onClick ={()=> setCounter((prev)=> prev+1)}></button>
        <span> {counter}</span>
        <button></button>
        
        </div>
    )
};

