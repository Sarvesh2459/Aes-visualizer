import './App.css';
import './test.css';
import * as React from 'react';
import { render } from 'react-dom';
import { motion } from 'framer-motion';


const key = '11111111111111111111111111111111';
function KeyExpansion(){
const [x , setx] = React.useState(true);
const [y , sety] = React.useState(true);
const change=() => {
  setx(!x);
  setTimeout(()=> {sety(!y)},500);
  setTimeout(()=> {setx(true)},1000);
  
  
}
  return (
    <div className="App">
      <p>hello this is key expansion page</p>
      <p>{key}</p>
      <button onClick={change}>
                Sbox substitution
        </button>
        <div className='c'>
      <div className='example-container'>
        <motion.div animate={{x:10}} ></motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:10,y:10}}></motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:10,y:20}}></motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:10,y:30}}></motion.div>
      </div>
      </div>
        <div className='c'>
      <div className='example-container'>
        <motion.div animate={{x:20}} ></motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:20,y:10}}></motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:20,y:20}}></motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:20,y:30}}></motion.div>
      </div>
      </div>
        <div className='c'>
      <div className='example-container'>
        <motion.div animate={{x:30}} ></motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:30,y:10}}></motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:30,y:20}}></motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:30,y:30}}></motion.div>
      </div>
      </div>
        <div className='c'>
      <div className='example-container'>
        <motion.div animate={{x: x? 40 : 290 , y:y ? 0:440}} ></motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x :40,y:10}}></motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x :40,y:20}}></motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x :40,y:30}}></motion.div>
      </div>
      </div>
    </div>
  );
  }

export default KeyExpansion;