import { Avatar, Button, CircularProgress, Table, TableCell, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Country = () => {
    const [data, setData]: any = useState<any>();
    const { country } = useParams()
    const navigate = useNavigate()
    const fetchData = async () => {
        try {
            const res = await axios(`https://restcountries.com/v3.1/name/${country}`)
            console.log(res.data[0]);
            setData(res.data[0])
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {

        console.log(country);
        fetchData()
        console.log(data)
    }, [country])

    return (
        <>
            {data ? <div>
                <Typography sx={{ textAlign: 'center' }} variant='h5'>Country Details</Typography>
                <Table sx={{ width: '30vw', ml: '35vw', backgroundColor: 'lightgreen', borderRadius: '10px', mt: 5, boreder: '1px solid black', boxShadow: '8px 10px #888888' }}>
                    <TableRow>
                        <TableCell>
                            <b>{country}</b>
                        </TableCell>
                        <TableCell>
                            <TableCell>
                                <Avatar src={data.flags.png} variant='rounded' />
                            </TableCell>
                            <TableCell>
                                <Avatar src={data.coatOfArms.png} variant='rounded' />
                            </TableCell>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Capital City :
                        </TableCell>
                        <TableCell>
                            {data.capital[0]}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Population :
                        </TableCell>
                        <TableCell>
                            {data.population}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Latitude :
                        </TableCell>
                        <TableCell>
                            {data.latlng[0]}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Longitude :
                        </TableCell>
                        <TableCell>
                            {data.latlng[1]}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>

                        </TableCell>
                        <TableCell>
                            <Button data-testid='capital' title="capitalweather" variant='contained' onClick={() => navigate(`/weather/${data.capital[0]}`)}>capital Weather</Button>
                        </TableCell>
                    </TableRow>
                </Table>

            </div>
                :
                <><CircularProgress />loading...</>
            }
        </>
    )
}

export default Country