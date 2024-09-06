import React from "react";
// import './App.css';

function Quiz() {


    return (
        <div id="quiz-container">
            <div className="question-container">
                <p>Q1. Which of the following countries is not in Oceania?</p>
                <input type="radio" id="q1a" name="q1" value="q1a"/>
                <label for="q1a">Vanuatu</label>

                <input type="radio" id="q1b" name="q1" value="q1b"/> 
                <label for="q1b">Niue</label>

                <input type="radio" id="q1c" name="q1" value="q1c"/>
                <label for="q1c">Guam</label>

                <input type="radio" id="q1d" name="q1" value="q1d"/>
                <label for="q1d">Guadeloupe</label>
            </div>

            <div className="question-container">
                <p>Q2. Which of the following countries has the smallest land mass?</p>
                <input type="radio" id="q2a" name="q2" value="q2a"/>
                <label for="q2a">Ecuador</label>

                <input type="radio" id="q2b" name="q2" value="q2b"/> 
                <label for="q2b">Paraguay</label>

                <input type="radio" id="q2c" name="q2" value="q2c"/>
                <label for="q2c">Uruguay</label>

                <input type="radio" id="q2d" name="q1" value="q2d"/>
                <label for="q2d">Bolivia</label>
            </div>

            <div className="question-container">
                <p>Q3. Which of the following countries has the smallest land mass?</p>
                <input type="radio" id="q3a" name="q3" value="q3a"/>
                <label for="q3a">Ecuador</label>

                <input type="radio" id="q3b" name="q3" value="q3b"/> 
                <label for="q3b">Paraguay</label>

                <input type="radio" id="q3c" name="q3" value="q3c"/>
                <label for="q3c">Uruguay</label>

                <input type="radio" id="q3d" name="q3" value="q3d"/>
                <label for="q3d">Bolivia</label>
            </div>

            <div className="question-container">
                <p>Which of the following countries speaks English?</p>
                <input type="radio" id="q3a" name="q3" value="q3a"/>
                <label for="q2a">Martinique</label>

                <input type="radio" id="q3b" name="q3" value="q3b"/> 
                <label for="q3b">Montserrat</label>

                <input type="radio" id="q3c" name="q4" value="q3c"/>
                <label for="q3c">Aruba</label>

                <input type="radio" id="q3d" name="q3" value="q3d"/>
                <label for="q3d">Saint Martin</label>
            </div>

            <div className="question-container">
                <p>Q4. Which of the following countries has the largest land mass?</p>
                <input type="radio" id="q4a" name="q4" value="q4a"/>
                <label for="q2a"></label>

                <input type="radio" id="q4b" name="q4" value="q4b"/> 
                <label for="q4b">Montserrat</label>

                <input type="radio" id="q4c" name="q4" value="q4c"/>
                <label for="q4c">Aruba</label>

                <input type="radio" id="q4d" name="q4" value="q4d"/>
                <label for="q4d">Saint Martin</label>
            </div>


        </div>
    )
}

export default Quiz