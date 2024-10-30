import PropTypes from 'prop-types';
import './Recipe.css';

const Recipe = ({ recipe, onDelete, onUpdateRequest }) => {
    if (!recipe) {
        return null; // Return null if recipe is undefined
    }

    return (
        <div className="recipe-card">
            <div className="image-container">
                <img src={recipe.image || 'default-image-url.jpg'} alt={recipe.title || 'Recipe Image'} />
            </div>

            <h3>{recipe.title || 'Untitled Recipe'}</h3>
            <p>{recipe.ingredients || 'Unknown Ingredients'}</p>
            <p>{recipe.description || 'Uncategorized'}</p>
            
            <button onClick={() => onUpdateRequest(recipe)}>Update</button>
            <button onClick={() => onDelete(recipe._id)}>Delete</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        ingredients: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
    }),
    onDelete: PropTypes.func.isRequired,
    onUpdateRequest: PropTypes.func.isRequired
};

export default Recipe;




