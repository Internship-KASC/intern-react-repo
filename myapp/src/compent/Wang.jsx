import React from 'react'
import './style.css'

const Wang = () => {
  return (
    <div>
        <div id="container">
           
            <div class="form-wrap">
                <h1>Sign up</h1>
                <p>It's Free and only takes a minute</p>
            <form> 
                <div class="form-group">
                   <label for="first-name">FirstName</label>
                   <input type="text" name="firstname" id="first-name"></input>
                </div>
                <div class="form-group">
                    <label for="lastname">Lastname</label>
                    <input type="text" name="lastname" id="last-name"></input>
                </div>
                <div class="form-group">
                     <label for="email">Email</label>
                    <input type="email" name="email" id="email"></input>
                </div>
                <div class="form-group">
                    <label for="Address">Address</label>
                    <input type="text" name="Address" id="Address"></input>
                </div>
                <div class="form-group">
                    <label for="phone">phone no</label>
                    <input type="text" name="phone" id="phone"></input>
                </div>
                <button type="submit" onclick="mse()">Sign up</button>
                
                <p class="bottom-text">By clicking the sign up button, you agree to our<a href="#">term &condition</a> and <a href="#">privacy policy</a></p>
            </form>

        </div>
        <footer>
            <p>Already have an account<a href="#">Login Here</a></p>
        </footer>
        
    </div>
    </div>
  )
}

export default Wang