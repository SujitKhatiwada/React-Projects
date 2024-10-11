import { useState } from "react";

 

const MathFunction = () => {

  const [finaltext, setFinaltext] = useState('');

  const DoSome = () => {
    
    const myvalue = document.getElementById("mytext").value + " Added";
    setFinaltext(myvalue);

  };

 

  return (

    <div>

      <input type="text" id="mytext"/>

      <br />

      <button onClick={DoSome}> Click Me </button>

      <br />

      {finaltext}

    </div>

  );

};

 

export default MathFunction;