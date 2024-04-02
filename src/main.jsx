import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const dataFactory = (key, url, name) => ({key, url, name})
const data = [
  dataFactory("Q", "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", "Heater 1"),
  dataFactory("W", "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", "Heater 2"),
  dataFactory("E", "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", "Heater 3"),
  dataFactory("A", "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", "Heater 4"),
  dataFactory("S", "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", "Clap"),
  dataFactory("D", "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", "Open-HH"),
  dataFactory("Z", "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", "Kick-n'-Hat"),
  dataFactory("X", "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", "Kick"),
  dataFactory("C", "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", "Closed-HH")
]
const root = createRoot(document.getElementById('root'))
root.render(<App audios={data}/>)