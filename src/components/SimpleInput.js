/*
NOTE:-
  This code is realy an imprtant real world concept and itsrelated to working with forms module, handling touched state vedio

*/
import React, { useState, useRef, useEffect } from "react";
import "./SimpleInput.css";
const SimpleInput = (props) => {
  // is we use useRef() to get input data
  // const enteredNameRef = useRef(); /// --------for now we dont go for this but ye can
  // is we are using useState() to get input data
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameInputTouch, setNameInputTouch] = useState(false);
  useEffect(() => {
    if (nameIsValid) {
      console.log("Your name is valid");
    }
  }, [nameIsValid]);
  const enteredNameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // when form is submitted this means user touched all the fields even if he enters empty data so at this point we true our touching state
    setNameInputTouch(true);
    // const user_name = enteredNameRef.current.value;
    if (enteredName.trim().length === 0) {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log(enteredName); // this is from useState()
    // console.log(enteredNameRef.current.value); // this is from useRef().. and here currrent point the input field where you use ref prop
    setEnteredName(""); // reset form through usestate
    // enteredNameRef.current.value = ""  //reset form through useRref but this is not a good to update a real dom by own
  };
  const nameInputIsInValid = !nameIsValid && nameInputTouch;
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
        />
        {!nameIsValid && nameInputTouch ? <p>Name must not be empty</p> : ""}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
