import React, {createContext} from 'react'; 
import {useState, useEffect} from 'react'; 
import axios from 'axios'
 export const MealsContext = createContext();

export default function Context({children}){
    const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [currentUser, setCurrentUser] = useState(null); 
  const [currentPage, setCurrentPage] = useState(0); 
  const PER_PAGE = 10; 
  const offset = currentPage * PER_PAGE;

  const mealsToShow = Array.isArray(meals) ? meals.slice(offset, offset + PER_PAGE) : null; 
  const pageCount = meals ? Math.ceil(meals.length / PER_PAGE) : 0;


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

 
return (<MealsContext.Provider value={{loading, mealsToShow, meals, setCurrentPage, pageCount,   setSearchTerm, searchTerm, currentUser, setCurrentUser}}>
  {children}
</MealsContext.Provider>)

}