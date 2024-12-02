import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value of null, and a type of string and a function that sets a string
const MessageContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>] | null>(null);

// Grandparent component that provides the context to the Parent component
const Grandparent: React.FC = () => {
  const state = useState<string>('Hello');

  return (
    // Provide the state to the Parent component
    <MessageContext.Provider value={state}>
      <Parent />
    </MessageContext.Provider>
  );
};

// Parent component that calls the Child component, does not need to provide props
const Parent: React.FC = () => <Child />;

// Child component that uses the context to display a message and change the message
const Child: React.FC = () => {
    // Get the context from the MessageContext
    const context = useContext(MessageContext);
    if (!context) return null;
    
    // Destructure the context into message and setMessage
    const [message, setMessage] = context;

    // Use the message and setMessage, containing the data from the context
    return (
        <div>
            <p>{message}</p>
            <button onClick={() => setMessage('Updated via Context')}>Change Message</button>
        </div>
    );
};