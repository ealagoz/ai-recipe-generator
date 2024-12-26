import PropTypes from "prop-types";
export default function IngredientsForm(props) {
  return (
    <form action={props.handleAddIngredient} className="add-ingredient-form">
      <input
        type="text"
        placeholder="e.g. oregano"
        aria-label="Add ingredient"
        name="ingredient"
      />
      <button type="submit">Add ingredient</button>
    </form>
  );
}

IngredientsForm.propTypes = {
  handleAddIngredient: PropTypes.func.isRequired,
};
