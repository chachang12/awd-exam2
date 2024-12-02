import React, { useState } from 'react';
import './styles.css'; // Assuming this CSS file already exists
// ^ Thats how you import a stylesheet in React

const UsingClassNames: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            {/* Static class name */}
            <h1 className="static-class">This is a static class example</h1>

            {/* Dynamic class name */}
            <button 
                className={isActive ? 'active-class' : 'inactive-class'} 
                onClick={toggleActive}
            >
                {isActive ? 'Active' : 'Inactive'}
            </button>
        </div>
    );
};

export default UsingClassNames;