import React, {Component} from "react"
import Modal from "react-modal"
class IngredientsPopup extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false
    }

    this.style = {
      content: {
        backgroundColor: 'rgb(255, 158, 229)',
        width: '400px',
        height: '600px',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    }
  }

  handleClick() {
    this.setState(prevState => ({
      modalOpen:!prevState.modalOpen
    })
    )
  }


  render() {

    const listOfIngredients = document.querySelector('#hidden').value.split(',')
    const length = listOfIngredients.length

    return(
      <>
      <button onClick = {() => this.handleClick()} id="ingredientsButton" className="button">Ingredients</button>
      <Modal style = {this.style} isOpen = {this.state.modalOpen}>
        <div id="modalDiv">
          <h2>Ingredients</h2>
          <button onClick = {() => this.handleClick()} className="button">Close</button>
        </div>    
        {Array.from({ length }, (_, i) => (
            <p key={i}>{`Ingredient ${i + 1}:`} <strong>{`${listOfIngredients[i]}`}</strong></p>
          ))}
        
      </Modal>

      </>
      )
  }
}

export default IngredientsPopup