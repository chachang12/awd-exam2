import React, { useState } from 'react';

const BasicEventHandling: React.FC = () => {

  // Click Event Handler
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked');
  };

  // Mouse Event Handlers
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('Mouse entered');
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('Mouse left');
  };

  // Keyboard Event Handler
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(`Key pressed: ${event.key}`);
  };

  // Form Event Handlers
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Form submitted with value: ${inputValue}`);
  };

  // Focus Event Handlers
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log('Input focused');
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log('Input blurred');
  };

  return (
    <div>
      <h1>Basic Event Handling</h1>

      {/* Click Event */}
      <button onClick={handleClick}>Click Me</button>

      {/* Mouse Events */}
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Hover over me
      </div>

      {/* Keyboard Events */}
      <input type="text" onKeyDown={handleKeyDown} placeholder="Press any key" />

      {/* Form Events */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {/* Focus Events */}
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} placeholder="Focus on me" />
    </div>
  );
};

export default BasicEventHandling;