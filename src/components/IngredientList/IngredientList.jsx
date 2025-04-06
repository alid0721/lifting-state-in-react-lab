// src/components/IngredientList/IngredientList.jsx

const IngredientList = (availableIngredients) => {
    return (
        <>
        <ul>{availableIngredients.map((ingredient,index)=>(
            <li key={index} style={{ backgroundColor: ingredient.color }}>{ingredient.name}
            <button onClick={()=>onAdd(ingredient)}>+</button>
            </li>
            ))}
        </ul>
        </>
    );
  };    
  
  export default IngredientList;
  