import { useState, useEffect } from 'react';
import axios from 'axios';
import './Recipes.css';
import Recipe from './Recipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [email, setEmail] = useState('');

    const handleDeleteRecipe = async (id) => {
        try {
            // Effettua la richiesta di eliminazione al server
            await axios.delete(`http://localhost:5004/api/recipes/${id}`);
            // Rimuove la ricetta dall'array localmente dopo l'eliminazione
            setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== id));
        } catch (error) {
            console.error('Error deleting recipe: ', error);
        }
    };

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const res = await axios.get('http://localhost:5004/api/recipes');
                console.log('API Response:', res.data);
    
                if (res.status === 200) {
                    if (Array.isArray(res.data)) {
                        setRecipes(res.data);
                    } else {
                        console.error('Data received is not an array:', res.data);
                        setRecipes([]); // Evita di visualizzare nulla se non è un array
                    }
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
    
        getRecipes();
        setEmail(localStorage.getItem('email'));
    }, []);
    
    return (
        <>
            {email && <div className="email">Hello, {email}</div>}
            <div className="recipes">
                {recipes.map((recipe) => (
                    <Recipe key={recipe._id} recipe={recipe} onDelete={handleDeleteRecipe} />
                ))}
            </div>
        </>
    );
};

export default Recipes;


