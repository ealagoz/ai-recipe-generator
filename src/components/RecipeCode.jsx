import PropTypes from "prop-types";
import Markdown from "react-markdown";

export default function RecipeCode(props) {
  return (
    <section
      className="suggested-recipe-container"
      ref={props.ref}
      aria-live="polite"
    >
      <h2>Check Claude Recommends: </h2>
      {<Markdown>{props.recipe}</Markdown>}
    </section>
  );
}
RecipeCode.propTypes = {
  ref: PropTypes.object.isRequired,
  recipe: PropTypes.array.isRequired,
};
