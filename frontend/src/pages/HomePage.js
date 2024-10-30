import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';



const Homepage = () => {
    
    return (
        <Container className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to minute!</h1>
            <div className="jumbotron bg-white p-10 rounded-lg shadow-lg">
                <p className="text-lg mb-6">Explore and share creative content here with the world!</p>
                <div className="flex space-x-4">
                    <Link to="/register">
                        <Button className="btn-primary">Register</Button>
                    </Link>
                    <Link to="/login">
                        <Button className="btn-primary">Login</Button>
                    </Link>
                </div>
            </div>
        </Container>
    )
};

export default Homepage;
