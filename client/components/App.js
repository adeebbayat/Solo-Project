import React, {Component} from "react";
import Heart from "react-animated-heart";
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: null,
      didLoad: false,
      isClick: false,
    }
  }

  


  fetchData() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        menu: data,
        didLoad:true,
        isClick:false
      })
      console.log(this.state.menu.meals)
    })
    .catch((err) => console.log(err))
  }
  
  componentDidMount(){
    this.fetchData();
  }

  handleClick = () => {
    this.setState(prevState => ({
      isClick: !prevState.isClick
    }));
  }


  render() {

    return(
      <>
      <div id="topBar">
        <button className="button" onClick={() => {window.location.href = "http://localhost:8080/login"}}>Logout</button>
          <div id="nameAndRecipe">
            <h1>Hello {this.props.name}!</h1>
            <p id="recipeName">Here is your recipe: <strong>{this.state.didLoad && this.state.menu 
            ? `${this.state.menu.meals[0].strMeal}`
            : 'Loading...'}</strong></p>
          </div>
          <button className="button" onClick={() => this.fetchData()}>Shuffle Recipe</button>
      </div>
      
          <hr></hr>

        <div id="imgAndText" >
          <img id="img" src = {this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strMealThumb}` : null} ></img>
          <div id="recipeText">
            <p><strong>Origin: </strong>{this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strArea}`: 'Loading...'}</p>
            <p><strong>Category: </strong>{this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strCategory}`: 'Loading...'}</p>
            <p><strong>Instructions: </strong>{this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strInstructions}`: 'Loading...'}</p>
            <p><strong>Youtube </strong> <a href={this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strYoutube}`: 'Loading...'}>Link</a></p>
          <Heart isClick = {this.state.isClick} onClick={() => this.handleClick()}/>
          </div>
        </div>
      </>
    )
  }
}

export default App