import React from 'react'

const UpdatingStateWithPrev = () => {
    const [count, setCount] = React.useState<number>(0);

    const increment = () => {
        // prevCount is the previous value of count
        setCount(prevCount => prevCount + 1);
    };

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UpdatingStateWithPrev