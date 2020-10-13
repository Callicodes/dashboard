import { Grid } from "@material-ui/core";
import React from "react";
import "./styles.css";
// import Checkbox from "./Checkbox"
import Question from "./Question"


export default function QuestionEditor() {

  return (
    <Grid xs={7}>

      <h1>Editor (TODO)</h1>
      <div>
        <Question />
      </div>


    </Grid >
  );

}