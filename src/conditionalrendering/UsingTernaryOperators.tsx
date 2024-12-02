import React from 'react'

const UsingTernaryOperators = () => {
    const isDarkMode = true;
  return (
    <div>
        <p>
            {isDarkMode ? 'Dark Mode is On' : 'Light Mode is Off'}
        </p>
    </div>
  )
}

export default UsingTernaryOperators