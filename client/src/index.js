import React from "react";
import { render } from 'react-dom'
import App from "../components/App"

const url = new URL(window.location.href)
const params = new URLSearchParams(url.search)
const name = params.get('name')

render(<App name = {name}/>,document.getElementById('root'));