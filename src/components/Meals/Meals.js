import React from 'react'

import MealsSummary from '../Meals/MealsSummary'
import AvailableMeals from '../Meals/AvailableMeals'

const Meals = props => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  )
}

export default Meals
