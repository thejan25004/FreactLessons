import {useReducer, useState} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return { count: 0 }
        default:
            return state;
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <h1>Count : {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
            <br />

            <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
            <br />

            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default Counter;





// import {useState} from "react";
//
//
// // this is UseState Senario
//
// const Counter = () => {
//
//
//     const[count,setCount] = useState(0);
//
//     return(
//        <div>
//
//            <h1>Count : {count}</h1>
//            <button onClick={() => setCount(count + 1)}>Increment</button>
//            <br />
//
//            <button onClick={() => setCount(count-1)}>Discrement </button>
//            <br />
//
//            <button onClick={() => setCount(0)}>Reset</button>
//        </div>
//     )
// }
//
// export default Counter;