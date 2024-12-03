import React, { useEffect } from 'react'

const UseinguseEffectWithDependencies = () => {

    const [count, setCount] = React.useState(0)

    useEffect (() => {
        console.log('Component mounted')
        return () => {
            console.log('Component unmounted')
        }
    }, [count]) // useEffect will run every time the count changes

    const updateCount = () => {
        setCount(prevCount => prevCount + 1);
    }

  return (
    <div>
        <button onClick={updateCount}>
            Increment
        </button>
    </div>
  )
}

export default UseinguseEffectWithDependencies