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
        <button onClick={() => {window.location.href = "http://localhost:8080/login"}}>Logout</button>
        <div>
          <h1>Hello {this.props.name}!</h1>
          <p style={{fontSize: '20pt'}}>Here is your recipe: <strong>{this.state.didLoad && this.state.menu 
          ? `${this.state.menu.meals[0].strMeal}`
          : 'Loading...'}</strong></p>
          <button onClick={() => this.fetchData()}>Shuffle Recipe</button>
          <hr></hr>
        </div>

        <div style={{display:'flex', gap:'10px'}}>
          <img style={{maxWidth: '500px'}} src = {this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strMealThumb}` : null} ></img>
          <div>
            <p><strong>Origin: </strong>{this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strArea}`: 'Loading...'}</p>
            <p><strong>Category: </strong>{this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strCategory}`: 'Loading...'}</p>
            <p><strong>Instructions: </strong>{this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strInstructions}`: 'Loading...'}</p>
            <p><strong>Youtube </strong> <a href={this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strYoutube}`: 'Loading...'}>Link</a></p>
          </div>
        </div>
      </>
    )
  }
}

export default App