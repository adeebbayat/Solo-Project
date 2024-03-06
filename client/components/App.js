import React, {Component} from "react";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: null,
      didLoad: false
    }
  }

  

  fetchData() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        menu: data,
        didLoad:true
      })
      console.log(this.state.menu.meals)
    })
    .catch((err) => console.log(err))
  }
  
  componentDidMount(){
    this.fetchData();
  }


  render() {

    return(
      <>
      <h1>Hello {this.props.name}!</h1>
      <p>{this.state.didLoad && this.state.menu 
      ? `${this.state.menu.meals[0].strMeal}`
      : 'Loading...'}</p>
      <img src = {this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strMealThumb}` : null} ></img>
      </>
    )
  }
}

export default App