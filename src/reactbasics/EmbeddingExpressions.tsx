import React from 'react'

// Variable
const name = 'Carson Chang'

// Object
const user = {
    name: 'Carson Chang',
    position: 'Software Engineer',
    age: 21
}

// Function
const getGreeting = (user: {name: string, position: string}) => {
    return 'Hello, ' + user.name + '!'
}

// Array
const hobbies = ['Coding', 'Pickleball', 'Gaming']

const EmbeddingExpressions = () => {
  return (
    <div>
        {/* Embedding name */}
        <h1>
            {name}
        </h1>

        {/* Embedding object properties */}
        <h1>
            {user.name}
        </h1>

        {/* Embedding function calls */}
        <h1>
            {getGreeting(user)}
        </h1>

        {/* Embedding expressions */}
        <h1>
            {user.age + 100}
        </h1>

        {/* Embedding conditionals */}
        <h1>
            {user.age > 18 ? 'Adult' : 'Minor'}
        </h1>

        {/* Embedding arrays using map*/}
        <ul>
            {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
            ))}
        </ul>
    </div>
  )
}

export default EmbeddingExpressions