import React from 'react';
import './App.css';
import HookCounterOne from "./components/HookCounterOne";
import ClassCountOne from "./components/ClassCountOne";

function App() {
  return (
    <div className="App">
       <HookCounterOne></HookCounterOne>
       {/* <ClassCountOne></ClassCountOne> */}
    </div>
  );
}

export default App;
