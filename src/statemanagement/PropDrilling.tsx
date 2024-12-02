import { useState } from "react";

// In this example, Grandparent has a message state that is passed down to Parent and then to Child.
const Grandparent: React.FC = () => {
    // Initialize the message state with 'Hello'
    const [message, setMessage] = useState<string>('Hello');

    // Pass the message
    return <Parent message={message} setMessage={setMessage} />;
};

// Parent receives the message state and the setMessage function as props and passes them to Child.
const Parent: React.FC<{ message: string; setMessage: React.Dispatch<React.SetStateAction<string>> }> = ({ message, setMessage }) => {
    return <Child message={message} setMessage={setMessage} />;
};

// Child receives the message state and the setMessage function as props and displays the message.
const Child: React.FC<{ message: string; setMessage: React.Dispatch<React.SetStateAction<string>> }> = ({ message, setMessage }) => (
    <div>
        <p>{message}</p>
        <button onClick={() => setMessage('Hi from Child!')}>Change Message</button>
    </div>
);

export default Grandparent;