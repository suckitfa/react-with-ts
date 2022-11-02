import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePositionHook from './hooks/useMousePosition';
function App() {
  const positions = useMousePositionHook()
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
    </div>
  );
}

export default App;
