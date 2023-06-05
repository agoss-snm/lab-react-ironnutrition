import { useState } from 'react';
import './App.css';
import foods from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [search, setSearch] = useState('');
  const [food, setFood] = useState(foods);
  const [filteredFood, setFilteredFood] = useState(foods);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    const filtered = food.filter((foodItem) =>
      foodItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFood(filtered);
  };

  const onFormSubmit = (name, calories, image, servings) => {
    const updatedFood = [...food];
    updatedFood.push({
      name: name,
      calories: calories,
      image: image,
      servings: servings
    });

    setFood(updatedFood);
    setFilteredFood(updatedFood);
  };

  const handleDelete = (foodItem) => {
    const updatedFood = food.filter((item) => item !== foodItem);
    setFood(updatedFood);
    setFilteredFood(updatedFood);
  };

  return (
    <div className="App">
      <SearchBar search={search} handleSearch={handleSearch} />
      <FoodBox food={filteredFood} onDelete={handleDelete} />
      <h4>Add Food Entry:</h4>
      <AddFoodForm addFood={onFormSubmit} />
    </div>
  );
}

export default App;
