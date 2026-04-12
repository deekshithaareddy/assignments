import { useState } from "react";
import App from "./App";
function Counter(){
    // state
    const [count,setCount]=useState(0);
    // functions to modify the state
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1)
    }
    console.log("Counter component")
    return (
        <div>
            <h1 className="text-4xl">Count:{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h2></h2>

        </div>
    )

}
export default Counter;