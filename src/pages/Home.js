import Header from "../components/Header/Header";
import MealsContainer from "../components/MealsContainer/MealsContainer";

function Home({ loading, meals }) {
  return (
    <div>
      <Header />
      <MealsContainer meals={meals} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* <img src={joke.icon_url} />
                <p>{joke?.value}</p> */}
        </>
      )}
    </div>
  );
}

export default Home;
