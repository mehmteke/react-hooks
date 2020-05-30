import React, { useState } from "react";

function HookCounterThree(...props) {
  
    const [user, setUser] = useState({...props.user});
  
   function handleChange(event) {
       const {name,value} = event.target;
       setUser( (previousState) => ({
           ...previousState,
           [name] : value
       }))
   }

  return (
    <div>
      <input
        type="text"
        name = "FirstName"
        value={user.FirstName}
        onChange={handleChange}
      >
      </input>
      <input
        type="text"
        name = "LastName"
        value={user.LastName} 
        onChange={handleChange}
      >
      </input> 

      <h2>Your FirstName : {user.FirstName}</h2>
      <h2>Your LastName  : {user.LastName} </h2>
      <h2>{JSON.stringify(user)} </h2>
    </div>
  );
}

export default HookCounterThree;
