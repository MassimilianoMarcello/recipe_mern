import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './UpdateRecipe.css';

const UpdateRecipe = ({ recipe, onUpdate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (recipe) {
            setTitle(recipe.title || '');
            setDescription(recipe.description || '');
            setIngredients(recipe.ingredients || '');
            setImage(recipe.image || '');
        }
    }, [recipe]);

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:5004/api/recipes/${recipe._id}`, {
                title,
                description,
                ingredients,
                image
            });

            if (response.status === 200) {
                onUpdate(response.data.recipe);
            } else {
                setError('Failed to update recipe.');
            }
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError('An error occurred while updating the recipe.');
        }
    };

    if (!recipe) return null;

    return (
        <div className="modal-overlay">
            <div className="update-recipe">
                <h3>Update Recipe</h3>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Recipe Title"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="Ingredients"
                />
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                />
                <button onClick={handleUpdate}>Update Recipe</button>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

UpdateRecipe.propTypes = {
    recipe: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string,
        description: PropTypes.string,
        ingredients: PropTypes.string,
        image: PropTypes.string
    }).isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default UpdateRecipe;


