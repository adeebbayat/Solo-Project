import React, {Component} from "react";

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  async handleSubmit(e) {
    e.preventDefault()
    const response = await fetch('http://localhost:8080/login',
    {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name: this.state.value
      })
    }
    )
    
    if (response.redirected && this.state.value) {
      // Use window.location.href to navigate to the redirected URL
      window.location.href = response.url;
    } else {
      console.log(this.state.value);
    }
    console.log(this.state.value)
  }


  render() {
    return(
      <div id="login">
        <form onSubmit={(event) => this.handleSubmit(event)} method="post" >
          <div id="form">
            <label id="enterName">
              <strong>Enter your name:</strong>
            </label>
            <input onChange={(event) => this.handleChange(event)} type="text"/>
            <button className="button">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export {TestComponent};