import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./components/Search/Search";

function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');

  useEffect(async () => {
     fetchData();

  }, [searchTerm]);

  function fetchData() {
    let mealsData = null; 
    setLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      
      .then(({ data }) => {
        if(data.meals){
         mealsData = data.meals.map((meal) => {
          const ingredients = extractIngredients(meal);

          const {
            idMeal: id,
            strMeal: name,
            strArea: area,
            strInstructions: instructions,
            strMealThumb: image,
            strCategory: category,
            strYoutube: youtube,
          } = meal;
          return {
            id,
            area,
            name,
            instructions,
            image,
            ingredients,
            category,
            youtube,
          };
        });
      }
        console.log('meals Data')
        setLoading(false);
        setMeals(mealsData);
      })
      .catch((error) => console.log(error));
  }

  function extractIngredients(meal) {
    const ingredients = [];
    for (let key in meal) {
      if (key.includes("strIngredient") && meal[key]) {
        ingredients.push(meal[key]);
      }
    }
    return ingredients;
  }
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home loading={loading} meals={meals} setSearchTerm={setSearchTerm}/>
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <About />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
