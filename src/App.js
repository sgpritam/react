import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)
  function getData(val){
    console.log(val.target.value);
    setData(val.target.value)
  }

  console.log("-------------")
  // return (
  //   <div className="App">
  //     <h1>{data}</h1>
  //     <button onClick={updateData}>Update Data</button>
  //   </div>

  // );
  // return (
  //   <div className="App">
  //     <h1>Props in React</h1>
  //     <Student name={name} email="test@test.com" other={{address:"delhi",mobile:"000"}} />
  //     <Student name="Peter" email="test1@test1.com" other={{address:"delhi1",mobile:"001"}}/>
  //     <Student name="John" email="xyz@test.com" other={{address:"delhi2",mobile:"002"}}/>
  //     <button onClick={()=>{setData("Manish")}}>Update Details</button>
  //   </div>
  // );
  return (
    <div className='App'>
      {
        print?
        <h1>{data}</h1>
        :null
      }
      <h1>{data}</h1>
      <input type="text" onChange={getData}></input>
      <button onClick={()=>setPrint(true)}>Print Data</button>
    </div>
  )
}

export default App;
