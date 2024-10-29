import PropTypes from 'prop-types';
import './Recipe.css'; // Rimuovi l'importazione di `DeleteRecipe`

const Recipe = ({ recipe, onDelete }) => {
    if (!recipe) {
        return null; 
    }

    const handleDelete = () => {
        onDelete(recipe._id); // Chiama la funzione onDelete con l'id della ricetta
    };

    return (
        <div className="recipe-card">
            <div className="image-container">
                <img src={recipe.image || 'default-image-url.jpg'} alt={recipe.title || 'Recipe Image'} />
            </div>

            <h3>{recipe.title || 'Untitled Recipe'}</h3>
            <p>{recipe.ingredients || 'Unknown Ingredients'}</p>
            <p>{recipe.description || 'Uncategorized'}</p>
            
            <button onClick={handleDelete}>Delete</button>
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
};

export default Recipe;



