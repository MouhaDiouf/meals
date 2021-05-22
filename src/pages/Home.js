import Header from "../components/Header/Header";
import MealsContainer from "../components/MealsContainer/MealsContainer";

function Home({ loading, meals , setSearchTerm}) {

  return (
    <div>
      <Header  setSearchTerm={setSearchTerm}/>
      
      {loading ? <p>Loading...</p> : ( !meals? <h2>No results</h2> : <MealsContainer meals={meals} />)}
    </div>
  );
}

export default Home;
