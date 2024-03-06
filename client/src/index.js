import React from "react";
import { render } from 'react-dom'
import App from "../components/App"

const url = new URL(window.location.href)
const params = new URLSearchParams(url.search)
const name = params.get('name')

console.log(window.location.href)
if (!name || window.location.href === 'http://localhost:8080/recipe?name=null') window.location.href = "http://localhost:8080/login"
render(<App name = {name}/>,document.getElementById('root'));