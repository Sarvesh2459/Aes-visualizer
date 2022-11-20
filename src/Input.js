import * as React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

   export default function Input(){
    const {plaintext,setplaintext,key,setkey,arko,setarko,sb1,setsb1,mat,setmat,final,setfinal}=React.useContext(UserContext)
    const pass_data=()=>{
        console.log(plaintext);
        console.log(key);  
        }
    return(
        <>
        <input type="text" name="name" placeholder='plain text' autoComplete='off'
        onChange={(e)=>{
            setplaintext(e.target.value)           
        }}></input>
        <input type="text" name="name" placeholder='key' autoComplete='off'
        onChange={(e)=>{
        setkey(e.target.value)
        }}></input>
        <Link to={`/explain/${key}`} style={{ textDecoration: 'none' }}>
        <button onClick={pass_data} >step Visualization</button>
        </Link>
        <Link to={`/home`} style={{ textDecoration: 'none' }}>
        <button  >encrypt text</button>
        </Link>
        </>
    )
    
}


