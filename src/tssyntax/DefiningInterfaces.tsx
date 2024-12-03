import React from 'react';

// Define a basic interface
interface User {
  id: number;
  name: string;
  email: string;
}

// Define another interface that extends the User interface
interface Admin extends User {
  role: string;
}

// Define a props interface for a React component
interface UserProps {
  user: User;
}

// Define a props interface for an Admin component
interface AdminProps {
  admin: Admin;
}

// Example component using the UserProps interface
const UserComponent: React.FC<UserProps> = ({ user }) => {
  return (
    <div>
      <h1>User</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

// Example component using the AdminProps interface
const AdminComponent: React.FC<AdminProps> = ({ admin }) => {
  return (
    <div>
      <h1>Admin</h1>
      <p>ID: {admin.id}</p>
      <p>Name: {admin.name}</p>
      <p>Email: {admin.email}</p>
      <p>Role: {admin.role}</p>
    </div>
  );
};

const DefiningInterfaces = () => {
  const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  const admin: Admin = {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Administrator'
  };

  return (
    <div>
      <UserComponent user={user} />
      <AdminComponent admin={admin} />
    </div>
  );
};

export default DefiningInterfaces;