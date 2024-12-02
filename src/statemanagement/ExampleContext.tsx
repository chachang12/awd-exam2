import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface ExampleContextType {
  value: string;
  setValue: (newValue: string) => void;
}

// Create the context with a default value
const ExampleContext = createContext<ExampleContextType | undefined>(undefined);

// Create a provider component
interface ExampleProviderProps {
  children: ReactNode;
}

export const ExampleProvider: React.FC<ExampleProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string>('default value');

  return (
    <ExampleContext.Provider value={{ value, setValue }}>
      {children}
    </ExampleContext.Provider>
  );
};

// Custom hook to use the ExampleContext
export const useExampleContext = (): ExampleContextType => {
  const context = useContext(ExampleContext);
  if (!context) {
    throw new Error('useExampleContext must be used within an ExampleProvider');
  }
  return context;
};

// Usage of the ExampleProvider and useExampleContext, use this in App.tsx

// import React from 'react';
// import { ExampleProvider, useExampleContext } from './ExampleContext';

// const DisplayComponent: React.FC = () => {
//   const { value } = useExampleContext();
//   return <div>Current Value: {value}</div>;
// };

// const UpdateComponent: React.FC = () => {
//   const { setValue } = useExampleContext();
//   return <button onClick={() => setValue('new value')}>Update Value</button>;
// };

// const App: React.FC = () => {
//   return (
//     <ExampleProvider>
//       <DisplayComponent />
//       <UpdateComponent />
//     </ExampleProvider>
//   );
// };

// export default App;