import logo from './logo.svg';
import './App.css';
import images from './images/vrdbpanther2.png';
import './style.css';


function App() {
  return (
    <div className="App">
      <div style= {{borderSolid: '1px' ,maxWidth : '100vw'}}/>
      <h1 className = 'title red'>Folatomi</h1>
      <img src="/images.jpeg/vrdbpanther.png" alt="image"/>
      <br />
      <img src= {images} alt = "image" />
      
      
    </div>
  );
}

export default App;