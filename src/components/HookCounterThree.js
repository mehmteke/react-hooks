import React, { useState } from "react";

function HookCounterThree(...props) {
  
    const [user, setUser] = useState({...props.user});
  
   function handleChange(event) {
       debugger;
       const {name,value} = event.target;
       console.log("Name  : " + name);
       console.log("Value : " + value);
   }

  return (
    <div>
      <input
        type="text"
        name = "FirstName"
        value={user.FirstName}
        onChange={(e) => setUser({ ...user,FirstName: e.target.value })}
      >
      </input>
      <input
        type="text"
        value={user.LastName}
        // spread operatör ... user
        onChange={(e) => setUser({...user, LastName: e.target.value })}
      >
      </input>
      <input
        type="text"
        name = "LastName"
        value={user.LastName}
        onChange = {handleChange}
      >
      </input>

      <h2>Your FirstName : {user.FirstName}</h2>
      <h2>Your LastName  : {user.LastName} </h2>
      <h2>{JSON.stringify(user)}</h2>
    </div>
  );
}

export default HookCounterThree;
