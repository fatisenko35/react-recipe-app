import React from 'react'
import meal from "../../assets/meal2.svg";
const Details = ({item, i}) => {
  return (
    <div>
        <div key={i} className="wrapper-details" >
        <div className="details-container">
          <h1>{item.recipe.label}</h1>
          <img className="details-image" src={meal} alt="" />
        </div>
        <div className="details-body">
          <div className="details-left">
            {

              <>
                <p>Nutrients</p>
                <p>{item.recipe.totalNutrients.CA.label} {Math.floor(item.recipe.totalNutrients.CA.quantity)} {item.recipe.totalNutrients.CA.unit}</p>
                <p>{item.recipe.totalNutrients.CHOCDF.label} {Math.floor(item.recipe.totalNutrients.CHOCDF.quantity)} {item.recipe.totalNutrients.CHOCDF.unit}</p>
                <p>{item.recipe.totalNutrients.ENERC_KCAL.label} {Math.floor(item.recipe.totalNutrients.ENERC_KCAL.quantity)} {item.recipe.totalNutrients.ENERC_KCAL.units}</p>
                <p>{item.recipe.totalNutrients.PROCNT.label} {Math.floor(item.recipe.totalNutrients.PROCNT.quantity)} {item.recipe.totalNutrients.PROCNT.unit}</p>
                <p>{item.recipe.totalNutrients.SUGAR.label} {Math.floor(item.recipe.totalNutrients.SUGAR.quantity)} {item.recipe.totalNutrients.SUGAR.unit}</p>
                <p>{item.recipe.totalNutrients.K.label} {Math.floor(item.recipe.totalNutrients.K.quantity)} {item.recipe.totalNutrients.K.unit}</p>


              </>

            }
          </div>
          <div>
          <img src={item.recipe.image} alt="" />
          </div>
          <div className="details-right">
            {
              item.recipe.ingredients.map((items, index) => (
                <>
                  <p>{index +1 }. {items.text} </p>

                </>

              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details