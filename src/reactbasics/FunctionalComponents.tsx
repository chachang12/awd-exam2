import React from 'react'
import PropTypes from 'prop-types'

// Utilizing the PropTypes library to enforce prop types


// Defining the prop types for the component
type PropTypes = {
    name: string,
    age: number
}

// This is literally a functional component that uses the prop types defined above
const FunctionalComponents: React.FC<PropTypes> = ( props ) => {
  return (
    <div>
        {props.name} {props.age}
    </div>
  )
}

// Enforcing the prop types for the component
FunctionalComponents.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}


export default FunctionalComponents