import React from "react";
import { render } from 'react-dom'
import App from "../components/App"
import style from '../styles/application.scss'

const url = new URL(window.location.href)
const params = new URLSearchParams(url.search)
const name = params.get('name')

if (!name || window.location.href === 'http://localhost:8080/recipe?name=null') window.location.href = "http://localhost:8080/login"
render(<App name = {name}/>,document.getElementById('root'));