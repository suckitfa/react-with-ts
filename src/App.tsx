import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePositionHook from './hooks/useMousePosition';
import DogShow from './components/DogShow';
import withLoader from './components/withLoader';
import useURLLoader from './hooks/useURLLoader';
const dogImagURL = 'https://dog.ceo/api/breeds/image/random'

interface IShowResult {
  message:string;
  status:string;
}

interface ITHemeProps {
  [key:string]:{color:string;background:string;}
}
const themes:ITHemeProps = {
  'light' : {
    color:"#000",
    background:'#eee'
  },
  'dark': {
    color:'#fff',
    background:'#222'
  }
}
export const ThemeContext = React.createContext(themes.light)

function App() {
  const positions = useMousePositionHook()
  const WrapperDogShow = withLoader(DogShow,dogImagURL)
  const [data,loading] =  useURLLoader(dogImagURL)
  const dogResult  = data as IShowResult
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
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
      <h1>使用Hooks来实现Loading效果</h1>
      {
        loading ? <p>🐶读取中</p> 
        : <img src={dogResult&&dogResult.message} alt="" />
      }
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
