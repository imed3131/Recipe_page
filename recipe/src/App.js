import { useState } from 'react';
import './App.css';
import omelette from './images/image-omelette.jpeg'
function App() {
  const [phrases, SetPhrases] = useState([
    {id: 1 , title: "Total" , body: "Approximately 10 minutes"},
    {id: 2 , title: "Preparation" , body: "5 minutes"},
    {id: 3 , title: "Cooking" , body: "5 minutes"},
  ])
  const [ingredients, SetIngredients] = useState([
    {id:1 , body: "2-3 large eggs "} ,
    {id:2 , body: "Salt, to taste"} ,
    {id:3 , body: "Pepper, to taste"} ,
    {id:4 , body: "1 tablespoon of butter or oil "} ,
    {id:5 , body: "Optional fillings: cheese, diced vegetables, cooked meats, herbs"} ,
  ])
  const [Instructions, SetInstructions] = useState([
    {id: 1 , title: "Beat the eggs:" , body: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.You can add a tablespoon of water or milk for a fluffier texture."},
    {id: 2 , title: "Heat the pan:" , body: "Place a non-stick frying pan over medium heat and add butter or oil."},
    {id: 3 , title: "Cook the omelette:" , body: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."},
    {id: 4 , title: "Add fillings (optional):" , body: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."},
    {id: 5 , title: "Fold and serve:" , body: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."},
    {id: 6 , title: "Enjoy:" , body: "Serve hot, with additional salt and pepper if needed"},
  ])
  return (
    <div className='text-xl max-[500px]:text-sm max-[600px]:text-base max-[800px]:text-lg text-amber-950 relative'>
      <div className='w-full  img-box flex justify-center items-center' >
            <img className='omelette-img' src={omelette} alt="Omelette" />
      </div>
      <div className='big-box'>
        <div className='mb-12'>
           <div className='text-6xl max-[500px]:text-2xl max-[700px]:text-3xl max-[1000px]:text-4xl max-[1300px]:text-5xl font-bold font-serif text-amber-950'>
               Simple Omelette Recipe
           </div>
           <div className='pt-12'>
           An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats
           </div>
        </div>
        <div className='bg-rose-100  rounded-lg prep-time relative' >
          <div className='max-[500px]:text-lg max-[700px]:text-xl max-[1000px]:text-2xl text-3xl text-rose-900'>
            Preparation time 
          </div>
          <div className='mt-8 prep-phrases'>
              <ul>
                {phrases.map((phrase) => (
                  <li key={phrase.id} className='mt-4'><b>{phrase.title} : </b>{phrase.body}</li>
                ))}
              </ul>
          </div>
        </div>
        <div className='mt-8 relative border-b-2 border-inherit'>
          <div className='text-red-900 max-[500px]:text-xl max-[700px]:text-2xl max-[1000px]:text-3xl text-4xl font-semibold font-serif'>
          Ingredients
          </div>
          <div className='prep-time'>
          <ul>
                {ingredients.map((ingredient) => (
                  <li key={ingredient.id} className='mt-4'>{ingredient.body}</li>
                ))}
              </ul>
          </div>
        </div>
        <div className='mt-8 relative border-b-2 border-inherit'>
          <div className='text-red-900 max-[500px]:text-xl max-[700px]:text-2xl max-[1000px]:text-3xl text-4xl font-semibold font-serif'>
          Instructions
          </div>
          <div className='prep-time'>
          <ol start={1}>
                {Instructions.map((Instruction) => (
                  <li key={Instruction.id} className='mt-4'><b>{Instruction.title} : </b>{Instruction.body}</li>
                ))}
              </ol>
          </div>
        </div>
        <div className='mt-8 relative'>
          <div className='text-red-900 max-[500px]:text-xl max-[700px]:text-2xl max-[1000px]:text-3xl text-4xl font-semibold font-serif'>
          Nutrition
          </div>
          <div className='mt-12'>
            The table below shows nutritional values per serving without the additional fillings.
          </div>
          <table className='w-full '>
            <tr className='border-b-2 border-inherit'>
              <td >Calories</td>
              <td className='text-red-900'> <b> 277kcal </b></td>
            </tr>
            <tr className='border-b-2 border-inherit'>
              <td>Carbs</td>
              <td className='text-red-900'> <b> 0g </b> </td>
            </tr>
            <tr className='border-b-2 border-inherit'>
              <td>Protein</td>
              <td className='text-red-900'> <b> 20g </b> </td>
            </tr>
            <tr>
              <td>Fat</td>
              <td className='text-red-900'> <b> 22g </b> </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
