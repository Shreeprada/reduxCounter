import logo from './logo.svg';
import './App.css';
import {useRef} from "react";
import {useDispatch,useSelector} from "react-redux";
import { Add } from './store/action';
import { Sub,Addition,Subtraction,Mul,Div } from './store/action';
function App() {
  const ref=useRef();
  const addNew=()=>{
    let value=ref.current.value;
    
    dispatch(
        Addition(value)
    );
};
const subNew=()=>{
  let value=ref.current.value;
  
  dispatch(
      Subtraction(value)
  );
};
const mulNew=()=>{
  let value=ref.current.value;
 
  dispatch(
      Mul(value)
  );
};
const divNew=()=>{
  let value=ref.current.value;
 
  dispatch(
      Div(value)
  );
};
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.count);
  return (
    <div className="App">
      <h1>Value:{count}</h1>
      <button onClick={()=>dispatch(Add())}>+</button>
      
      <button onClick={()=>dispatch(Sub())}>-</button>
      <div>
        <input type="number" placeholder="value.." ref={ref}/>
        <br/>
        <button onClick={addNew}>Add</button>
        <button onClick={subNew}>Subtract</button>
        <button onClick={mulNew}>Multiply</button>
        <button onClick={divNew}>Divide</button>
      </div>
    </div>
  );
}

export default App;
