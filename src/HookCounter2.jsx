import React, {useState, useEffect} from 'react';
import "../src/counter.css";

const HookCounter2 = () => {
    const [count, setCount] = useState(0);
    // const [color, setColor] = useState('');
    const [positive, setPositive] = useState(true);
    const [style, setStyle] = useState('');

    const increment5 = () => {
        setCount(prevCount => prevCount + 5)
    }

    const decrement5 = () => {
        setCount(prevCount => prevCount - 5)
    }

    // const colorCode = () => {
    //     setColor((count < 0) ? console.log("The number is negative") : console.log("The number is positive");
    // }

    useEffect(() => {
        setPositive((count < 0) ? "The number is negative" : "The number is positive");
    }, [count, style]);

    // const randomColorGenerator = () => {
    //     let r = Math.round((Math.random() * 255)); //red 0 to 255
    //     let g = Math.round((Math.random() * 255)); //green 0 to 255
    //     let b = Math.round((Math.random() * 255)); //blue 0 to 255
    //     return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    //   };

    return (
        <div className="container">
            <h1>Counter with Hooks + Change by 5s</h1>
            <h4>{positive}</h4>
            <h2>Count: {count}</h2>
            <button className="btn" onClick={() => setCount(count - 1)}>-</button>
            <button className="btn" onClick={() => setCount(count + 1)}>+</button>
            <br/>
            <button className="btn five" onClick={decrement5}>Take Away 5</button>
            <button className="btn five" onClick={increment5}>Add 5</button>
        </div>
    )
}

export default HookCounter2;