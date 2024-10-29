import axios from 'axios';
import PropTypes from 'prop-types';

const DeleteRecipe = ({ id, onDelete }) => {
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`http://localhost:5004/api/recipes/${id}`);
            if (res.status === 200) {
                onDelete(id); // Aggiorna la lista delle ricette
                alert('Recipe deleted successfully');
            }
        } catch (error) {
            console.error('Error deleting recipe:', error);
            alert('Failed to delete recipe');
        }
    };

    return (
        <button onClick={handleDelete} className="delete-button">
            Delete Recipe
        </button>
    );
};

DeleteRecipe.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteRecipe;