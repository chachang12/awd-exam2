interface BaseProps {
    id: number;
}

// Extending the BaseProps interface
interface UserProps extends BaseProps {
    name: string;
    age: number;
}
  
const User: React.FC<UserProps> = ({ id, name, age }) => (
    <div>
        <h1>{name}</h1>
        <p>ID: {id}</p>
        <p>Age: {age}</p>
    </div>
);

export default User;  