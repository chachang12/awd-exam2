import React from 'react';

interface GreetingProps {
    name: string;
    age?: number; // age is an optional prop
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            {age && <p>You are {age} years old.</p>}
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div>
            {/* The age prop is optional */}
            <Greeting name="Alice" />
            <Greeting name="Bob" age={30} />
        </div>
    );
};

export default App;