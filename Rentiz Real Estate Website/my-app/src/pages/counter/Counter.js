import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement , reset} from "../../store/slices/counter.slice";

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector((store) => store.counterSlice.value);
    const name = useSelector((store) => store.counterSlice.name);
    const age = useSelector((store) => store.counterSlice.age);

    const onClickIncrementHandler = () => {
        console.log("Increment clicked");
        dispatch(increment());
    };

    const onClickDecrementHandler = () => {
        console.log("Decrement clicked");
        dispatch(decrement());
    };
    const resetCounter = () => {
        console.log("Reset clicked");
        dispatch(reset());
    };


    return (
        <div className="counter" style={{ background: "Wheat" , color:"black", textAlign: "center" }}>
            <h1>Counter</h1>
            <button onClick={onClickIncrementHandler}>+</button>
            <p>Counter value: {counter}</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={onClickDecrementHandler}>-</button>
            <button onClick= {resetCounter}>Reset</button>
        </div>
    );
}