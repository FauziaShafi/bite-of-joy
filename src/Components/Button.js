import React from 'react'
import {useState} from 'react';
import Result from './Result';

export default function Button() {
    const [inst, setInst]= useState(0);
    const [mealName , setMealName] =useState("");
    const [mealImg , setMealImg] =useState("");
    const [data , setData] = useState();
    const [btnTitle, setBtnTitle] = useState("Generate a random recipe")
   


    const generate = async() => {
        let url ="https://www.themealdb.com/api/json/v1/1/random.php";
      let data = await fetch(url);
      let parcedD = await data.json();
      let parcedData = await parcedD.meals[0]

      setData(parcedData);
      setInst(parcedData.strInstructions);
      setMealName(parcedData.strMeal);
      setMealImg(parcedData.strMealThumb);
      setBtnTitle("Generate another random recipe")
    }
  return (
    <div>
        
        <button type="button" className="btn btn-dark my-3" onClick={generate}>{btnTitle}</button>
        <Result inst= {inst} mealName={mealName} mealImg={mealImg} data={data} />
      
    </div>
  )
}
