import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome';
// import Hello from "./components/Hello";
// function App() {
//   return (
//     <div className="App">
// {/* <Hello /> */}
//       {/* <Greet /> */}
//       <Welcome/>
//     </div>
//   );
// }

class App extends Component {
  render(){
    return(
      <div className='App'>
        <Greet name="Vivek" testname='1'>
         <p>
            Here is line change
         </p> 
        </Greet>
        <Greet name="V'ivek" testname='2'>
          <button>Action</button>
        </Greet>
        <Greet name="Viv'ek" testname='3'/>
        <Welcome name="Vivek" testname='1'/>
        <Welcome name="V'ivek" testname='2'/>
        <Welcome name="Viv'ek" testname='3'/>

      </div>
    )
  }
}

export default App;
