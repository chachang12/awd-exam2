import React, { useEffect } from 'react';

const UnmountingExample: React.FC = () => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component will unmount');
        };
    }, []);

    return (
        <div>
            <h1>Unmounting Example</h1>
            <p>Check the console to see the unmounting message.</p>
        </div>
    );
};

export default UnmountingExample;