// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (
        <ul>
            {stack.map((ingredient, index) => (
                <li key={index}>
                <span style={{ color: ingredient.color }}>{ingredient.name}</span>
                <button onClick={() => onRemove(index)}>X</button>
                </li>
            ))}
        </ul>);
  };
  
  export default BurgerStack;
  