
import './App.css';
import {Card} from "./cont/Card";
import { MainPage } from './components/Main/index';


export const App = () => {
  return (
    <div className="App">
      
      {/* <MainPage/> */}
      <Card name="a" color="red"/>
      <Card name="b" color="black"/>
      <Card name="c" color="green"/>
      <Card name="d" color="yelow"/>
      
      
    </div>
  );
}


