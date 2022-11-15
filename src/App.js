/*
THREE APPROACHES OF VALIDATING FORM 
1. when form is submitted
2. when a input is losing focus
3. on every key stroke
*/

import SimpleInput from "./components/SimpleInput";
import LosingFocusAndEveryKeyStroke from "./components/LosingFocusAndEveryKeyStroke";
import ManageOverallFormValidity from "./components/ManageOverallFormValidity";
import ManageOverallFormValidityReducer from "./components/ManageOverallFormValidityReducer";

function App() {
  return (
    <div className="app">
      {/* -----------This is the demonstration of first approach  */}
      {/* <SimpleInput /> */}
      {/* -----------This is the demonstration of first approach  */}
      {/* -----------This is the demonstration of second and third approach  */}
      {/* <LosingFocusAndEveryKeyStroke /> */}
      {/* -----------This is the demonstration of second and third approach  */}
      {/* -----------Managing overall form validity  */}
      <ManageOverallFormValidity />
      {/* implementing above overall form validity component with useReducer instead of useState */}
      {/* <ManageOverallFormValidityReducer /> */}
    </div>
  );
}

export default App;
