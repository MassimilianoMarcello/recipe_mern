import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Recipe.css';

const AddRecipe = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();

        if (title && ingredients && description && image) {
            try {
                const res = await axios.post(
                    '/api/recipes',
                    { title, ingredients, description, image },
                    { withCredentials: true }
                );

                if (res.status === 201) {
                    navigate('/');
                    window.location.reload();
                }
            // eslint-disable-next-line no-unused-vars
            } catch (err) {
                setError('Failed to add recipe. Please try again later.');
            }
        } else {
            setError('Please fill in all fields');
        }
    };

    return (
        <div className="add-recipe">
            <form onSubmit={submitForm}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor="ingredients">Ingredients</label>
                <input
                    type="text"
                    id="ingredients"
                    name="ingredients"
                    required
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />

                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                {error && <div className="error">{error}</div>}
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipe;
