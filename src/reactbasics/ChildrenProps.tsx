import React from 'react';

// Parent component that uses the children prop
const ParentComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>This is the Parent Component</h1>
      <div>{children}</div>
    </div>
  );
};

// Usage of ParentComponent with children
// This renders inside the parents div component
const App: React.FC = () => {
  return (
    <ParentComponent>
      <p>This is a child element.</p>
      <button>Click Me</button>
    </ParentComponent>
  );
};

export default App;