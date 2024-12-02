import { useState } from "react";

// Both Child A and Child B need access to the count state either to display the count or to set the count.
// We can lift the state up to the parent component and pass the state and the setter function as props to the child components.
const Parent: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
    <>
        <ChildA count={count} />
        <ChildB setCount={setCount} />
    </>
    );
};
  
  // Receives the count state as a prop and displays it.
    const ChildA: React.FC<{ count: number }> = ({ count }) => (
        <p>Count: {count}</p>
    );
    
        // Receives the setCount function as a prop and increments the count state by 1 when the button is clicked.
    const ChildB: React.FC<{ setCount: React.Dispatch<React.SetStateAction<number>> }> = ({ setCount }) => (
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    );

  export default Parent;