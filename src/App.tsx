import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePositionHook from './hooks/useMousePosition';
import DogShow from './components/DogShow';
import withLoader from './components/withLoader';
const dogImagURL = 'https://dog.ceo/api/breeds/image/random'
function App() {
  const positions = useMousePositionHook()
  const WrapperDogShow = withLoader(DogShow,dogImagURL)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
        positions:{`x=${positions.x} , y=${positions.y}`}
        <LikeButton />
        <MouseTracker />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>使用HOC来实现组件的复用</h1>
      <WrapperDogShow />
    </div>
  );
}

export default App;
