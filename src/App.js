import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    // const promise = await fetch("https://api.chucknorris.io/jokes/random");
    // const json = await promise.json();
    // setLoading(false);
    // setJoke(json);
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then(({ data }) => {
        const mealsData = data.meals.map((meal) => {
          const ingredients = extractIngredients(meal);

          const {
            idMeal: id,
            strMeal: name,
            strArea: area,
            strInstructions: instructions,
            strMealThumb: image,
          } = meal;
          console.log(meal);
          return { id, area, name, instructions, image, ingredients };
        });
        // setJoke(data);
        setMeals(mealsData);
        setLoading(false);
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
            <Home loading={loading} meals={meals} />
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
