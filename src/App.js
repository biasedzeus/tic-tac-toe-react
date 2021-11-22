import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import Game from './Components/Game';

export default function App() {
  

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Game/>
    </div>
  );
}
