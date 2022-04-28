import { Avatar, Button, Grid, Paper, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Weather = () => {
    const [data, setData]: any = useState();
    const navigate = useNavigate();
    const ACCESS_KEY = '34dfc907af1fc10c884c0f4073e9ee49'

    const capital: any = useLocation().state;

    const handeleData = async () => {
        try {
            const res = await axios.get(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${capital}`);
            console.log(res);
            setData(res.data.current)
        }
        catch (e) {
            console.log('error');
        }
    }


    useEffect(() => {
        handeleData()
    }, [capital]);

    return (
        <div>
            <Button data-testid='back' sx={{ m: 3 }} variant='contained' onClick={() => navigate(-1)}>BACK</Button>
            {data ?
                <Paper elevation={24} sx={{ width: '30vw', ml: '35vw', mt: 5, p: 2 }}>
                    <Typography variant='h5' sx={{ textAlign: 'center', m: 2, textDecoration: 'underline' }}>WEATHER REPORT</Typography>
                    <Grid container>
                        <Grid sx={{ float: 'left' }}>
                            <Typography sx={{ m: 1 }} variant='h6'>
                               city : <b>{capital} </b>
                            </Typography>
                           
                            <Typography sx={{ m: 1 }} variant='h6'>
                                Temperature : {data.temperature}<sup>0</sup> celcius
                            </Typography>
                            <Typography sx={{ m: 1 }} variant='h6'>
                                Wind Speed : {data.wind_speed} km/hr
                            </Typography>
                            <Typography sx={{ m: 1 }} variant='h6'>
                                Precip : {data.precip}
                            </Typography>
                        </Grid>
                        <Grid sx={{ float: 'right' }}>
                            <Avatar variant='rounded' src={data.weather_icons[0]} sx={{ width: '5rem', height: '5rem', ml: 10, mt: 5 }} />
                        </Grid>
                    </Grid>
                   
                </Paper>
                :
                null}
        </div>
    )
}

export default Weather