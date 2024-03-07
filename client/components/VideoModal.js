import React, {Component} from "react"
import Modal from "react-modal"
import YouTube from "react-youtube"

class VideoModal extends Component{
  constructor(props) {
    super(props)
    this.state = {
      modalOpen:false,
      videoId:''
    }

    this.style = {
      content: {
        backgroundColor: 'rgb(255, 158, 229)',
        width: '650px',
        height: '420px',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    }
  }
    handleClick() {
      const videoId = document.querySelector('#hiddenVideo').value
      this.setState(prevState => ({
        modalOpen:!prevState.modalOpen,
        videoId: videoId
      }))}

  
    render() {

      return(
        <>
        <button onClick = {() => this.handleClick()}  id = "videoButton" className="button">Video Tutorial</button>
        <Modal style = {this.style} isOpen = {this.state.modalOpen}>
          <button onClick = {() => this.handleClick()} id="videoClose" className="button">Close</button>
          {this.state.modalOpen && <YouTube videoId={`${this.state.videoId}`}/>}
        </Modal>
        </>
      )
    }
  
}

export default VideoModal