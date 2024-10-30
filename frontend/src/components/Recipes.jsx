import { useState, useEffect } from 'react';
import axios from 'axios';
import './Recipes.css';
import Recipe from './Recipe';
import UpdateRecipe from './UpdateRecipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [email, setEmail] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleDeleteRecipe = async (id) => {
        try {
            await axios.delete(`http://localhost:5004/api/recipes/${id}`);
            setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== id));
        } catch (error) {
            console.error('Error deleting recipe: ', error);
        }
    };

    const handleRecipeUpdate = (updatedRecipe) => {
        setRecipes((prevRecipes) =>
            prevRecipes.map((recipe) =>
                recipe._id === updatedRecipe._id ? updatedRecipe : recipe
            )
        );
        setSelectedRecipe(null);
    };

    const handleUpdateRequest = (recipe) => {
        setSelectedRecipe(recipe);
    };

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const res = await axios.get('http://localhost:5004/api/recipes');
                if (res.status === 200 && Array.isArray(res.data)) {
                    setRecipes(res.data);
                } else {
                    console.error('Data received is not an array:', res.data);
                    setRecipes([]);
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
                    <Recipe
                        key={recipe._id}
                        recipe={recipe}
                        onDelete={handleDeleteRecipe}
                        onUpdateRequest={handleUpdateRequest}
                    />
                ))}
            </div>

            {selectedRecipe && (
                <UpdateRecipe
                    recipe={selectedRecipe}
                    onUpdate={handleRecipeUpdate}
                />
            )}
        </>
    );
};

export default Recipes;



