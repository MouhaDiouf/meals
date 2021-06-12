import Meal from "../Meal/Meal";
import styled from "styled-components";
import {MealsContext} from '../../Context'
import { useContext } from "react";
function MealsContainer() {
  const {mealsToShow:meals} = useContext(MealsContext)
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
  `;
  return (
    <Container>
      {meals.map((meal, idx) => (
        <Meal meal={meal} key={idx} />
      ))}
    </Container>
  );
}

export default MealsContainer;
