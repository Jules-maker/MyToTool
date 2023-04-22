import React, { useState } from 'react';

function Dashboard() {
    const [title, setTitle] = useState('Dashboard');

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}

export default Dashboard;
