import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handelSubmit = (e:any)=>{
        e.preventDefault();
        setInput('');
        navigate('/country',{state:input})
        console.log(input);
    }

  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' sx={{flexGrow:1}}>
                    WETHER REPORT
                </Typography>
                <form action="" onSubmit={handelSubmit}>
                    <input
                    style={{height:'2rem'}}
                     value={input} 
                     placeholder='enter country name' 
                     onChange={(e:any)=>setInput(e.target.value)}
                     />
                     <button style={{height:'2.4rem'}} disabled={!input}  type='submit'>SEARCH</button>
                </form>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav