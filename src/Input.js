import './App.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import Dialog from './Dialog';

   export default function Input(){
    const {setplaintext,setkey}=React.useContext(UserContext)
    return(
        <div className='Backgd'>
            <Dialog val="true"/>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
            <h1 style={{color:"rgb(27, 191, 32)"}}>AES Visualizer</h1>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',marginTop:"-46px",marginLeft:"13%"}}>
                <div style={{display: 'flex',  justifyContent:'right', alignItems:'right'}}>
                <h3 style={{color:"white"}}>By TechHeist3.0</h3>
                </div>
            </div>
        <div  style={{float: "left", width: "8%",height:"8%",marginLeft:"28%",marginRight:"10%",marginTop:"5%"}} >
        <input style={{width:"150%",height:"130%",textAlign:"center",color:"rgb(27, 191, 32)",borderRadius:"35px",fontSize:"20px"}} type="text" name="name" placeholder='Plain Text' autoComplete='off'
            onChange={(e)=>{
            setplaintext(e.target.value)           
            }}>
        
        </input>
        </div>
        <div  style={{float: "left", width: "8%",height:"8%",marginLeft:"15%",marginRight:"30%",marginTop:"5%"}} >
        <input style={{width:"150%",height:"130%",textAlign:"center",color:"rgb(27, 191, 32)",borderRadius:"35px",fontSize:"20px"}} type="text" name="name" placeholder='Key' autoComplete='off'
        onChange={(e)=>{
        setkey(e.target.value)
        }}></input>
        </div>
        <div  style={{float: "left", width: "30%",marginLeft:"35%",marginRight:"35%",marginTop:"7%"}} >
        <h1 style={{color:"rgb(27, 191, 32)",textAlign:"center",marginLeft:"2%"}}>The Choice is Yours</h1>
        </div>
        <div  style={{float: "left", width: "8%",height:"8%",marginLeft:"29%",marginRight:"10%",marginTop:"3%"}} >
            <Link to={`/explain`} style={{ textDecoration: 'none' }}>
            <button className='button-18' style={{background:"#0000FF",width:"150%",height:"150%"}}>Step Visualization</button>
            </Link>
        </div>
        <div  style={{float: "left", width: "8%",height:"8%",marginLeft:"13%",marginRight:"32%",marginTop:"3%"}} >
            <Link to={`/home`} style={{ textDecoration: 'none' }}>
            <button className='button-18' style={{background:"#ED0800",width:"150%",height:"150%"}}>Encrypt text</button>
            </Link>
        </div>
      
    </div>
    )
    
}


