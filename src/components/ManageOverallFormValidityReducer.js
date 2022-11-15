import React, { useEffect, useReducer } from "react";
import "./SimpleInput.css";
const ManageOverallFormValidityReducer = () => {
  const nameInitialState = {
    enteredName: "",
    isTouch: false,
  };
  const nameReducerFn = (state, action) => {
    if (action.type === "INPUT_VALUE") {
      return {
        enteredName: action.value,
        isTouch: state.isTouch,
      };
    }
    if (action.type === "LOSE_FOCUS") {
      return {
        enteredName: state.enteredName,
        isTouch: true,
      };
    }
    if (action.type === "RESET") {
      return {
        enteredName: "",
        isTouch: false,
      };
    }
    return nameInitialState;
  };
  const [nameState, dispatchFn] = useReducer(nameReducerFn, nameInitialState);
  //   we creata a constant instead of taking state
  const nameIsValid = nameState.enteredName.trim().length !== 0;
  const nameInputIsInValid = !nameIsValid && nameState.isTouch; // this is basically for applying styling
  // now we are validating the overall form
  let formIsValid;
  if (nameIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }
  // now we are validating the overall form

  const enteredNameChangeHandler = (e) => {
    dispatchFn({ type: "INPUT_VALUE", value: e.target.value });
  };
  const nameInputBlurHandler = () => {
    dispatchFn({ type: "LOSE_FOCUS" });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // when form is submitted this means user touched all the fields even if he enters empty data so at this point we true our touching state

    // const user_name = enteredNameRef.current.value;
    if (!nameIsValid) {
      return;
    }
    console.log(nameState.enteredName); // this is from useState()
    dispatchFn({ type: "RESET" });
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
          value={nameState.enteredName} // here we use binding concept to show the effect on UI of updating state
          onBlur={nameInputBlurHandler}
        />
        {!nameIsValid && nameState.isTouch ? <p>Name must not be empty</p> : ""}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default ManageOverallFormValidityReducer;
