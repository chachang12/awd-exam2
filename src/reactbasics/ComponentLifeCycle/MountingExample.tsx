import React, { useEffect } from 'react';

const fetchData = () => {
    console.log('Fetching data...');
};

const MountExample: React.FC = () => {
  useEffect(() => {
    console.log('Component mounted');
    fetchData();

    // Cleanup runs during unmounting (see below).
    return () => console.log('Cleanup before unmount');
  }, []); // Empty dependency array ensures it runs only once.

  return <div>Mount Example</div>;
};
