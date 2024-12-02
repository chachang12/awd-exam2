import React, { useEffect } from 'react';

const UpdateExample: React.FC = () => {
    const [count, setCount] = React.useState(0);
  
    useEffect(() => {
      console.log(`Count updated to ${count}`);
    }, [count]); // Runs whenever 'count' changes.
  
    return (
      <button onClick={() => setCount(count + 1)}>
        Increment: {count}
      </button>
    );
  };
  