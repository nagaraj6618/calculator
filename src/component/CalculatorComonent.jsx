import React, { Component } from 'react'

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
      document.getElementById('result').value=y;
    }
    const deleteFunction=()=>{
      var result=document.getElementById('result').value;
      var lengthOfResult=result.length;
      result=result.substring(0,lengthOfResult-1);
      document.getElementById('result').value=result;
    }
    return (
      <React.Fragment>
        <div>
          <input type='text' id='result'/>
          <button onClick={clearFuntion}>Clear</button>
        </div>
        <div>
          <button onClick={()=>displayEvent('7')}>7</button>
          <button onClick={()=>displayEvent('8')}>8</button>
          <button onClick={()=>displayEvent('9')}>9</button>
          <button onClick={()=>displayEvent('/')}>/</button>
        </div>
        <div>
          <button onClick={()=>displayEvent('4')}>4</button>
          <button onClick={()=>displayEvent('5')}>5</button>
          <button onClick={()=>displayEvent('6')}>6</button>
          <button onClick={()=>displayEvent('*')}>*</button>
        </div>
        <div>
          <button onClick={()=>displayEvent('1')}>1</button>
          <button onClick={()=>displayEvent('2')}>2</button>
          <button onClick={()=>displayEvent('3')}>3</button>
          <button onClick={()=>displayEvent('-')}>-</button>
        </div>
        <div>
          <button onClick={()=>displayEvent('0')}>0</button>
          <button onClick={()=>displayEvent('.')}>.</button>
          <button onClick={equalOperation}>=</button>
          <button onClick={()=>displayEvent('+')}>+</button>
        </div>
        <button onClick={deleteFunction}>Del</button>
      </React.Fragment>
    )
  }
}

export default CalculatorComonent