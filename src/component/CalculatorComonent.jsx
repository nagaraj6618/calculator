
import React, { Component } from 'react'
import './Calculator.css'
 class CalculatorComonent extends Component {
 
  render() {
    const clearFuntion=()=>{
      document.getElementById('result').value="";
    }
     const displayEvent=(a)=>{
        document.getElementById('result').value+=a;
    }
    const equalOperation =()=>{
      var x=document.getElementById('result').value;
      var y=eval(x);
      if(y!==undefined){
      document.getElementById('result').value=y;
    }
    else{
      alert("Please Enter Value!")
    }
  }
    const deleteFunction=()=>{
      var result=document.getElementById('result').value;
      var lengthOfResult=result.length;
      result=result.substring(0,lengthOfResult-1);
      document.getElementById('result').value=result;
    }
    return (
      <div className='App-container'>
        <div>
          <input type='text' id='result'/>
          <button onClick={clearFuntion} id='clearButton'>Clear</button>
        </div>
        <div>
          <button onClick={()=>displayEvent('7')} id='numberButton'>7</button>
          <button onClick={()=>displayEvent('8')} id='numberButton'>8</button>
          <button onClick={()=>displayEvent('9')} id='numberButton'>9</button>
          <button onClick={()=>displayEvent('/')} id='operatorButton'>/</button>
        </div>
        <div>
          <button onClick={()=>displayEvent('4')} id='numberButton'>4</button>
          <button onClick={()=>displayEvent('5')} id='numberButton'>5</button>
          <button onClick={()=>displayEvent('6')} id='numberButton'>6</button>
          <button onClick={()=>displayEvent('*')} id='operatorButton'>*</button>
        </div>
        <div>
          <button onClick={()=>displayEvent('1')} id='numberButton'>1</button>
          <button onClick={()=>displayEvent('2')} id='numberButton'>2</button>
          <button onClick={()=>displayEvent('3')} id='numberButton'>3</button>
          <button onClick={()=>displayEvent('-')} id='operatorButton'>-</button>
        </div>
        <div className='lastdiv'>
          <button onClick={()=>displayEvent('0')}id='numberButton'>0</button>
          <button onClick={()=>displayEvent('.')} id='numberButton'>.</button>
          <button onClick={equalOperation} id='EqualButton'>=</button>
          <button onClick={()=>displayEvent('+')} id='operatorButton'>+</button>
        </div>
        <button onClick={deleteFunction} id='deleteButton'>Del</button>
      </div>
    )
  }
}

export default CalculatorComonent