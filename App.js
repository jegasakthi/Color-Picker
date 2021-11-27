import React, {useState} from 'react';
import "./App.css";
import {SwatchesPicker} from 'react-color';

 function App(){
   const [color,setColor] = useState("teal")
   const [hidden,setHidden] = useState(false)

   const pickerStyle ={
     default:{
       picker:{
         position: "absolute",
         button: "30px",
         left: "100px"
       }
     }
   }
  return(
    <div style={{background:color}} className= "App">

      <div className= "container">
        
        {hidden && (
      <SwatchesPicker
      styles={pickerStyle}
      color ={color}
      onChange= {updatedColor => setColor(updatedColor.hex)}
      />
      )}
      <button onClick={()=> setHidden(!hidden)}>
        {hidden ? 'Close' : ' Open'}
         </button>
      </div>
    </div>
  )
}

export default App;
