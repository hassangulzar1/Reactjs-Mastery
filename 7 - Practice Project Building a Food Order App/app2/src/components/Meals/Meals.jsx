import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AbailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AbailableMeals />
    </Fragment>
  );
};

export default Meals;
