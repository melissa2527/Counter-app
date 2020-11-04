import React, {useState, useEffect} from 'react';

const HookCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count)
    }, [count]);

    return (
        <div>
            <h1>Counter with Hooks</h1>
            <h3>{count}</h3>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}
export default HookCounter