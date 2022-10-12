import React from "react";

import Range from "./components/Range";
import RangeOneValue from "./components/RangeOneValue";

function App() {
  return (
    <div>
      <Range />
      <br/>
      <RangeOneValue 
        minValue={10} 
        maxValue={60} 
        step={1} 
        init={13} 
      />
    </div>
  );
}

export default App;