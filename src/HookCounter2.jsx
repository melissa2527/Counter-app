import React, {useState, useEffect} from 'react';

const HookCounter2 = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('');

    const increment5 = () => {
        setCount(prevCount => prevCount + 5)
    }

    const decrement5 = () => {
        setCount(prevCount => prevCount - 5)
    }

    // useEffect(() => {
    //     setColor(randomColorGenerator())
    // }, [count]);

    // const randomColorGenerator = () => {
    //     let r = Math.round((Math.random() * 255)); //red 0 to 255
    //     let g = Math.round((Math.random() * 255)); //green 0 to 255
    //     let b = Math.round((Math.random() * 255)); //blue 0 to 255
    //     return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    //   };

    return (
        <div>
            <h1>Counter with Hooks + Change by 5s</h1>
            <h3>{count}</h3>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            <br/>
            <button onClick={decrement5}>Take Away 5</button>
            <button onClick={increment5}>Add 5</button>
        </div>
    )
}

export default HookCounter2;