import React from 'react'

const UsingLeftHandConditionals = () => {
    const isLoggedIn = true;
    return (
        <div>
            {/* Conditional Rendering */}
            <div>
                {isLoggedIn && <p>Welcome, User!</p>}
                {!isLoggedIn && <p>Please log in</p>}
            </div>
        </div>
    )
}

export default UsingLeftHandConditionals