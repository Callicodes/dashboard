import React from "react";

function Question() {
    return (

        <div>
            <br />
            <h3 className="question">Question</h3>
            <br />
            <div> <input id="input-1" type="text" placeholder="Edit Question..." /></div>

            <br />

            <h3 className="Answers">Answers</h3>
            <br />
            <input type="checkbox" id="checkbox2" name="checkbox" value="Bike"></input>
            <div> <input id="input-2" type="text" placeholder="Edit Answer..." /></div>
            <input type="checkbox" id="checkbox1" name="checkbox" value="Bike"></input>

            <br />  <br />
            <p id="checkboxText">Is Correct?</p>
            <div> <input id="input-3" type="text" placeholder="Edit Answer..." /></div>


        </div>

    )
}
export default Question;