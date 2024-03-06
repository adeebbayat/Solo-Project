import React from "react";
import { render } from 'react-dom'
import App from "../components/App"

const thing = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then((response) => response.json());

render(<App name = "User"/>,document.getElementById('root'));