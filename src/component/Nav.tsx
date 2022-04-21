import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'

type Props = {
    navigate:any
}
const Nav:React.FC<Props> = ({...props}) => {

    const [input, setInput ]:any = useState('');

    const handelChange = (e:any)=>{
        setInput(e.target.value)
    }

    const handelSubmit = (e:any)=>{
        e.preventDefault();
        setInput('');
        props.navigate(`/country/${input}`)
    }

  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' sx={{flexGrow:1}}>Weather Report</Typography>
                <form action="" onSubmit={handelSubmit}>
                    <TextField type='text' placeholder='enter country  name' onChange={handelChange}/>
                    <Button sx={{height:'3.4rem', color:'white'}} variant='contained' disabled={!input} type='submit'>Search</Button>
                </form>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav