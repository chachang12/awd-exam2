import React from 'react';

// Define an enum for user roles
enum UserRole {
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest'
}

// Define an enum for status
enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending'
}

// Define a props interface that uses the enums
interface UserProps {
  id: number;
  name: string;
  role: UserRole;
  status: Status;
}

// Example component using the UserProps interface
const UserComponent: React.FC<UserProps> = ({ id, name, role, status }) => {
  return (
    <div>
      <h1>User</h1>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <p>Status: {status}</p>
    </div>
  );
};

const DefiningEnums = () => {
  const user = {
    id: 1,
    name: 'John Doe',
    role: UserRole.Admin,
    status: Status.Active
  };

  return (
    <div>
      <UserComponent {...user} />
    </div>
  );
};

export default DefiningEnums;