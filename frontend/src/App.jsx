import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Navbar from './components/NavBar';
import Recipes from './components/Recipes';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import AddRecipe from './components/AddRecipe';

const App = () => {
    return (
        <Router>
            <div>
                <Header title="Recipes" />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Recipes />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/add" element={<AddRecipe />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

