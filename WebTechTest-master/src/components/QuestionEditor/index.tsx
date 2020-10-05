import { Grid } from "@material-ui/core";
import React from "react";
import "./styles.css";
import Checkbox from "./Checkbox"



export default function QuestionEditor() {

  return (
    <Grid xs={7}>

      <h1>Editor (TODO)</h1>

      <button id="submit-button">Question</button>
      <div> <input id="input-1" type="text" placeholder="name" /></div>



      <button id="next-question-button">Answers</button>
      <div> <input id="input-2" type="text" placeholder="name" /></div>
      <div> <input id="input-3" type="text" placeholder="name" /></div>

      <div>
        <Checkbox />
      </div>


    </Grid >
  );

}