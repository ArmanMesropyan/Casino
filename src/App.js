
import { useState } from 'react';
import './App.css';
import Content from './components/content/content';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import SideBar from './components/sideBar/sideBar';

function App() {
 const [barState , setBarState] = useState()
const barClick = () =>{
  setBarState(!barState)
}

  return (
    <div className="App">
      <Header barClick={barClick}/>
       <Nav/>
       <Content/>
      <div className='side__Bar'>
      {barState ?  <SideBar/> : null}
      </div>
      
    </div>
  );
}

export default App;
