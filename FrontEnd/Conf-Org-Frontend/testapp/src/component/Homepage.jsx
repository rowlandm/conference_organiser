import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to Our Application!</h1>
            <p>This is the homepage of your React application. Feel free to explore and sign in to access more features.</p>
            {/* Correct the onClick event handler to use an arrow function */}
            <button onClick={() => navigate('/TemplateEdit')}>Template Edit</button>
        </div>
    );
};

export default HomePage;
