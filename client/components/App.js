import React, {Component} from "react";
import Heart from "react-animated-heart";
import YouTube from "react-youtube";
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
      const actualIngredients = []; let i = 1;

      while (data.meals[0][`strIngredient${i}`] !== "") {
        actualIngredients[i - 1] = data.meals[0][`strIngredient${i}`]
        i++
      }

      document.querySelector('#hidden').value = actualIngredients;

      const videoUrl = data.meals[0].strYoutube;
      const videoId = videoUrl.split('v=')[1] || videoUrl.split('youtu.be/')[1];

      document.querySelector('#hiddenVideo').value = videoId

      this.setState({
        menu: data,
        didLoad:true,
        isClick:false
      })

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
      <input id = "hidden" type="hidden" />
      <input id = "hiddenVideo" type="hidden"/>
      <h1 id="title">Egg-straordinaryRecipes.com</h1>
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
            <div id="heartDiv">
              <Heart isClick = {this.state.isClick} onClick={() => this.handleClick()}/>
            </div>
            <div id="text">
              <p><strong>Origin: </strong>{this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strArea}`: 'Loading...'}</p>
              <p><strong>Category: </strong>{this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strCategory}`: 'Loading...'}</p>
              <p><strong>Instructions: </strong>{this.state.didLoad && this.state.menu ? `${this.state.menu.meals[0].strInstructions}`: 'Loading...'}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App