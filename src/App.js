import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./components/Search/Search";
import ReactPaginate from 'react-paginate'

function App() {
  const [meals, setMeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); 
  const PER_PAGE = 10; 
  const offset = currentPage * PER_PAGE;
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const mealsToShow = meals.slice(offset, offset + PER_PAGE); 
  const pageCount = Math.ceil(meals.length / PER_PAGE)

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
  function handlePageClick({selected}){
    setCurrentPage(selected)

  }
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home loading={loading} meals={mealsToShow} setSearchTerm={setSearchTerm}/>
            <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          containerClassName={"pagination"}
          previousLinkClassName={"previous-link"}
          pageLinkClassName={"pagination-page-link"}
          nextLinkClassName={"next-link"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'page-link-active'}
          disabledClassName={'page-link-disabled'}
        />
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
