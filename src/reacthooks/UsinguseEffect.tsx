import React, { useEffect } from 'react'

const UsinguseEffect = () => {

    useEffect (() => {
        console.log('Component mounted')
        return () => {
            console.log('Component unmounted')
        }
    }, []) // Empty array means it will only run once when the component mounts and unmounts

  return (
    <div>UsinguseEffect</div>
  )
}

export default UsinguseEffect