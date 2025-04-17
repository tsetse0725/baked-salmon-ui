import RecipeList from "./RecipeList";

const Recipe = ({ name, ingredients, steps }) => {
  return (
    <div style={{ border: "3px double sienna", margin: 10, padding: 10 }}>
      <h3>{name}</h3>
      <RecipeList ingredients={ingredients} />
      <h2>Cooking Instructions</h2>
      <ol style={{ margin: 0, paddingLeft: "20px" }}>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
