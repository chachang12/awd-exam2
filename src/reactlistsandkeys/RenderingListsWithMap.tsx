import React from 'react'

interface User {
    id: number;
    name: string;
}

const RenderingListsWithMap = () => {
    const users: User[] = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];

    // Rendering a list of users
    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default RenderingListsWithMap