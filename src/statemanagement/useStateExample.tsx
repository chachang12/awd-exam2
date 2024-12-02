import React, { useState } from 'react';

const Counter: React.FC = () => {
    // const [state, setState] = useState<Type>(initialValue);
    // Initialize the state with 0
    const [count, setCount] = useState<number>(0);

    // Function to increment the count
    const increment = () => setCount(count + 1);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;