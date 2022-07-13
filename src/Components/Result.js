import React from "react";
import "../../src/App.css"

export default function Result(props) {
  return (
    <>
      {props.data && (
        <>
          <div className="container-fluid my-6">
            <h1 className="text-center">{props.mealName}</h1>
            <div className="row text-center">
              <div className="col-6 d-flex my-6">
                <img
                  src={props.mealImg}
                  alt="mealimage"
                  style={{ width: "70%" }}
                  className="rounded"
                ></img>
              </div>
              <div className="col-6 ">
                <h4>Ingredients:</h4>
                <li>
                  {props.data.strIngredient1} : {props.data.strMeasure1}
                </li>
                <li>
                  {props.data.strIngredient2} : {props.data.strMeasure2}
                </li>
                <li>
                  {props.data.strIngredient3} : {props.data.strMeasure3}
                </li>
                <li>
                  {props.data.strIngredient4} : {props.data.strMeasure4}
                </li>
                <li>
                  {props.data.strIngredient5} : {props.data.strMeasure5}
                </li>
                <li>
                  {props.data.strIngredient6} : {props.data.strMeasure6}
                </li>
                <li>
                  {props.data.strIngredient7} : {props.data.strMeasure7}
                </li>
              </div>
            </div>

            <div className="row my-5">
              <h4>Instruction</h4>
              <p>{props.inst}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
