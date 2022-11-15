import React, { useState, useEffect } from "react";
import "./SimpleInput.css";
const ManageOverallFormValidity = () => {
  const [enteredName, setEnteredName] = useState("");
  const [nameInputTouch, setNameInputTouch] = useState(false);

  //   we creata a constant instead of taking state
  const nameIsValid = enteredName.trim().length !== 0;
  const nameInputIsInValid = !nameIsValid && nameInputTouch; // this is basically for applying styling
  // now we are validating the overall form
  let formIsValid;
  if (nameIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }
  // now we are validating the overall form

  const enteredNameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const nameInputBlurHandler = () => {
    setNameInputTouch(true); // on lose focusing we true the touching state
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // when form is submitted this means user touched all the fields even if he enters empty data so at this point we true our touching state
    setNameInputTouch(true);
    // const user_name = enteredNameRef.current.value;
    if (!nameIsValid) {
      return;
    }
    console.log(enteredName); // this is from useState()

    setEnteredName(""); // reset form through usestate
    setNameInputTouch(false); //  because above line we empty enteredName value after form is submitted and through this after submitting form the enteredName value become empty and by this we getting invalid state because our touch input state will true when we submit the form thats why we need to false this state in the last
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label> <br />
        <input
          type="text"
          id="name"
          onChange={enteredNameChangeHandler}
          // ref={enteredNameRef}
          value={enteredName} // here we use binding concept to show the effect on UI of updating state
          onBlur={nameInputBlurHandler}
        />
        {!nameIsValid && nameInputTouch ? <p>Name must not be empty</p> : ""}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default ManageOverallFormValidity;
