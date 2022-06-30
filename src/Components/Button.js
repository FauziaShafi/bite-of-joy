import React from 'react'
import {useState} from 'react';

export default function Button() {
    const [inst, setInst]= useState(0);
    const [mealName , setMealName] =useState();
    const [mealImg , setMealImg] =useState();


    const generate = async() => {
        let url ="https://www.themealdb.com/api/json/v1/1/random.php";
      let data = await fetch(url);
      let parcedD = await data.json();
      let parcedData = await parcedD.meals[0]
      console.log(parcedData);
      setInst(parcedData.strInstructions);
      setMealName(parcedData.strMeal);
      setMealImg(parcedData.strMealThumb);
    }
  return (
    <div className='container'>
        <h1 className='my-3'>BITE OF JOY</h1>
        <button type="button" className="btn btn-primary btn-lg my-5" onClick={generate}>Generate Random Recipe</button>
        <div className='container'>
            <h3>{mealName}</h3>
            <img src={mealImg} alt="mealimage"></img>
            <p><b>Instruction: {inst} </b></p>
            <h5>Ingredients:</h5>

        </div>
    </div>
  )
}
