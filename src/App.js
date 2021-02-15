import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { applyNumber, changeOpType, clearDisplay, memoryPlus } from './actions';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAddClick = () => {
  //   dispatch(addOne(1));
  // }

  const handleNum = (number) => {
    dispatch( applyNumber(number) )
  };

  const handleOperation = (op) => {
    dispatch( changeOpType(op) )
  }

  const handleClear = () => {
    dispatch(clearDisplay());
  }

  const handleMemoryPlus = () => {
    dispatch(memoryPlus(state.total))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a> 
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick= {handleMemoryPlus}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={ () =>( handleNum( 1 ) ) }/> 
              <CalcButton value={2} onClick={ () =>( handleNum( 2 ) ) }/> 
              <CalcButton value={3} onClick={ () =>( handleNum( 3 ) ) }/> 
            </div>

            <div className="row">
              <CalcButton value={4} onClick={ () =>( handleNum( 4 ) ) }/> 
              <CalcButton value={5} onClick={ () =>( handleNum( 5 ) ) }/> 
              <CalcButton value={6} onClick={ () =>( handleNum( 6 ) ) }/> 
            </div>

            <div className="row">
              <CalcButton value={7} onClick={ () =>( handleNum( 7 ) ) }/> 
              <CalcButton value={8} onClick={ () =>( handleNum( 8 ) ) }/> 
              <CalcButton value={9} onClick={ () =>( handleNum( 9 ) ) }/> 
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick= { () => (handleOperation ("+"))}/>
              <CalcButton value={"*"} onClick= { () => (handleOperation ("*"))}/>
              <CalcButton value={"-"} onClick= { () => (handleOperation ("-"))}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
