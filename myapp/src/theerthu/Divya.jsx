import React from 'react'
import './style.css'

const Divya = () => {
  return (
    <div>
      <div id="container">
          <form action="" method="">
          <label>Patient Name  :</label>
              <input type="text" placeholder="Enter your first name"required></input>
              <input type="text" placeholder="Enter your last name"required></input><br></br>
            <label>Father/Husband Name  :</label>
              <input type="text" placeholder="Enter your fa/hus name" required></input><br></br>
            <label>Age :</label>
                <input type="number" placeholder="Enter your age"></input><br></br>
            <label for="gender-male">Male:</label>
                <input type="radio" name="Gender" value="choice-1"></input><br></br>
            <label for="gender-male">Female:</label>
                <input type="radio" name="Gender" value="choice-2"></input><br></br>
            <label for="Email">EmailID:</label>
                <input type="email" placeholder="Enter your emailid"></input><br></br>
            <label>Password :</label>
              <input type="password" placeholder="Enter your password"></input><br></br>
        </form>
      </div>
    </div>
  )
  };

export default Divya