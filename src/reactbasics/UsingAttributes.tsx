import React from 'react'

const handleClick = () => {
    alert('Button clicked')
}

const isLoggedIn = true;

const UsingAttributes = () => {
  return (
    <div>
        {/* Event Listener */}
        <button onClick={handleClick}>Submit</button>

        {/* Data attributes */}
        <button data-id="123">Submit</button>

        {/* Standard Attributes */}
        <img src='https://via.placeholder.com/150' alt='placeholder' id='profilepicture'/>
        <a href='https://www.google.com' target='_blank'>Google</a>

        {/* Dynamic Attributes */}
        <a href={isLoggedIn ? "/dashboard" : "/login"}>Click Here</a>

        {/* ClassName Attributes */}
        <div className='container'>
            <h1>Container</h1>
        </div>

        {/* Inline Style Attributes */}
        <div style={{color: 'red', backgroundColor: 'blue'}}>
            <h1>Inline Style</h1>
        </div>

    </div>
  )
}

export default UsingAttributes