import React from 'react'

// Example is a controlled form with two input fields
const MultipleStates = () => {
    // You can define an manage multiple states in a single component by using their unique state setter functions
    const [ userName, setUserName ] = React.useState('John Doe')
    const [ age, setAge ] = React.useState(30)

  return (
    <div>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} />
        <input value={age} onChange={(e) => setAge(Number(e.target.value))} />
    </div>
  )
}

export default MultipleStates