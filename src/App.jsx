import { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'

const DrumPad = props => (
  <button type="button" className="drum-pad" id={props.data.name}>
    <audio src={props.data.url} id={props.data.key} className="clip"></audio>
    <p>{props.data.key}</p>
  </button>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const keypadElements = this.props.audios.map((item, index) => {
      return <DrumPad data={item} key={index}/>
    })

    return (
      <div id="drum-machine">
        <div>{keypadElements}</div>
        <div id="display"></div>
      </div>
    )
  }
}

const audioItem = PropTypes.shape({
  key: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
})

DrumPad.propTypes = {
  data: audioItem,
}

App.propTypes = {
  audios: PropTypes.arrayOf(audioItem)
}

export default App
