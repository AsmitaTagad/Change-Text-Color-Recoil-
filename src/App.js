import React from "react";
import {ColorAtom} from './ColorAtom.js'
import {useRecoilState} from 'recoil';

export default function App() {
  const [color, setColorr]=useRecoilState(ColorAtom);

  const handleChange=()=>{
     setColorr(color==='blue' ? 'red' : 'blue'); 
  }

  return (
    <div style={{marginLeft:'103px'}}>
      <h1 style={{color:color}}>Hi, I change the color on Click Button</h1>
      <button onClick={handleChange}>Change Color</button>
    </div>
  );
}
