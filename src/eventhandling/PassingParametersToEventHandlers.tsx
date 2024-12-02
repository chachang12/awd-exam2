import React from 'react';

const PassingParametersToEventHandlers: React.FC = () => {
  // Inline Arrow Function Example
  const handleInlineClick = (id: number, event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Inline: Button clicked with id: ${id}`);
  };

  // Currying Example
  // Currying is a technique of evaluating a function with multiple arguments, into a sequence of functions with a single argument.
  const handleCurriedClick = (id: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Curried: Button clicked with id: ${id}`);
  };

  return (
    <div>
      <h1>Passing Parameters to Event Handlers</h1>

      {/* Inline Arrow Functions */}
      <button onClick={(event) => handleInlineClick(1, event)}>Inline Click Me (ID: 1)</button>
      <button onClick={(event) => handleInlineClick(2, event)}>Inline Click Me (ID: 2)</button>

      {/* Currying */}
      <button onClick={handleCurriedClick(1)}>Curried Click Me (ID: 1)</button>
      <button onClick={handleCurriedClick(2)}>Curried Click Me (ID: 2)</button>
    </div>
  );
};

export default PassingParametersToEventHandlers;