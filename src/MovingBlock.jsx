import * as React from 'react';
import './App.css';
import './test.css';
import { motion } from 'framer-motion';
import {useEffect,useState} from 'react'
import {UserContext} from './UserContext'

export default function MovingBlock()
{
const [flag, setflag]=useState(0)
const [x , setx] = React.useState(true);
const [y , sety] = React.useState(true);
useEffect(() => {
    const interval = setInterval(() => {
      setflag((prevflag) => prevflag + 1);
    }, 250);
    return () => clearInterval(interval,48000);
}, []);

    const {key}=React.useContext(UserContext)
    return(
      <div >
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <h1  style={{color:"rgb(27, 191, 32)",backgroundColor:"black",borderRadius:"16px",marginTop:"4%"}}>Moving the 13th cell to the bottom</h1>
      </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <div className='c'>
      <div className='example-container'>
        <motion.div animate={{x:10}}>{key[0]}{key[1]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:10,y:10}} >{key[2]}{key[3]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:10,y:20}} >{key[4]}{key[5]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:10,y:30}}  >{key[6]}{key[7]}</motion.div>
      </div>
      </div>
        <div className='c'>
      <div className='example-container'>
        <motion.div animate={{x:20}}  >{key[8]}{key[9]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:20,y:10}} >{key[10]}{key[11]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:20,y:20}} >{key[12]}{key[13]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:20,y:30}} >{key[14]}{key[15]}</motion.div>
      </div>
      </div>
        <div className='c'>
      <div className='example-container'>
        <motion.div animate={{x:30}} >{key[16]}{key[17]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:30,y:10}} >{key[18]}{key[19]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:30,y:20}} >{key[20]}{key[21]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x:30,y:30}} >{key[22]}{key[23]}</motion.div>
      </div>
      </div>
      {(flag<=10)?<div className='c'>
      <div className='example-container'>
        <motion.div animate={{x: (flag<=4 || flag>=8)? 40 : 180 , y:(flag<=6) ? 0:320}} >{key[24]}{key[25]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x :40,y:10}} >{key[26]}{key[27]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x :40,y:20}} >{key[28]}{key[29]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x :40,y:30}} >{key[30]}{key[31]}</motion.div>
      </div>
      </div>:
      <div className='c'>
      <div className='example-container'>
        <motion.div animate={{x: 40 , y:0}}  >{key[26]}{key[27]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x :40,y:10}} >{key[28]}{key[29]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x :40,y:20}} >{key[30]}{key[31]}</motion.div>
      </div>
      <div className='example-container'>
        <motion.div animate={{x :40,y:30}} >{key[24]}{key[25]}</motion.div>
      </div>
      </div>
      }

      </div>
      </div>
    );
}