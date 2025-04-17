const RecipeIngredient = ({ name, amount, measurement }) => {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
};

const RecipeList = ({ ingredients }) => {
  return (
    <ul style={{ margin: 0, paddingLeft: "20px" }}>
      {ingredients.map((ingredient, index) => (
        <RecipeIngredient
          key={index}
          name={ingredient.name}
          amount={ingredient.amount}
          measurement={ingredient.measurement}
        />
      ))}
    </ul>
  );
};

export default RecipeList;
