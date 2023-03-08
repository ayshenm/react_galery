import { useState } from 'react';
import './App.css';
import Images  from './assets/Image.js';

function App() {
  const [selectedImg,setSelectedImg] = useState(Images[0])
  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="selected" className="selected" />
      </div>
      <div className="imgContainer">
        
       {
        Images.map((img,i)=>(
          <img key={i}  src={img} alt="tulip" 
          onClick={() => setSelectedImg(img)}/> 
          

        ))
       }
      </div>
    </div>
  )
}

export default App
