import { useState } from "react";
import "./App.css";

/**
 * Challenge: Connect the form to local state
 *
 * 1. Create a state object to store the 4 values we need to save.
 * 2. Create a single handleChange function that can
 *    manage the state of all the inputs and set it up
 *    correctly
 * 3. When the user clicks "Sign up", check if the
 *    password & confirmation match each other. If
 *    so, log "Successfully signed up" to the console.
 *    If not, log "passwords to not match" to the console.
 * 4. Also when submitting the form, if the person checked
 *    the "newsletter" checkbox, log "Thanks for signing
 *    up for our newsletter!" to the console.
 */

export default function App() {

  const [formData, setFormData] = useState({
    email: "",
    password: '',
    passwordConfirm: '',
  })

  function handleSubmit(event) {
    event.preventDefault();
    console.log('submit');
  }

  function handleChange(event) {
    console.log(event.target.value)
    setFormData(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
        />

        <div className="form--marketing">
          <input id="okayToEmail" type="checkbox" />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
