import {
  Avatar,
  Button,
  Grid,
  Paper,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Country = () => {
  const [data, setData]: any = useState();
  const navigate = useNavigate();

  const country: any = useLocation().state;

  const handeleData = async () => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${country}`
      );
      console.log(res);
      setData(res.data[0]);
    } catch (e) {
      console.log("error");
    }
  };

  useEffect(() => {
    handeleData();
  }, [country]);

  return (
    <div>
      <Button
        data-testid="home"
        sx={{ m: 3 }}
        variant="contained"
        onClick={() => navigate("/")}
      >
        HOME
      </Button>
      {data ? (
        <Paper elevation={24} sx={{ width: "30vw", ml: "35vw", mt: 5, p: 2 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", m: 2, textDecoration: "underline" }}
          >
            COUNTRY DETAILS
          </Typography>
          <Grid container>
            <Grid sx={{ float: "left" }}>
              <Typography sx={{ m: 1 }} variant="h5">
                <b>{country} </b>
              </Typography>
              <Typography sx={{ m: 1 }} variant="h6">
                Capital city : {data.capital[0]}
              </Typography>
              <Typography sx={{ m: 1 }} variant="h6">
                Population : {data.population}
              </Typography>
              <Typography sx={{ m: 1 }} variant="h6">
                Latitude : {data.latlng[0]}
              </Typography>
              <Typography sx={{ m: 1 }} variant="h6">
                Longitude : {data.latlng[1]}
              </Typography>
            </Grid>
            <Grid sx={{ float: "right" }}>
              <Avatar
                variant="rounded"
                src={data.flags.png}
                sx={{ width: "5rem", height: "5rem", ml: 10, mt: 5 }}
              />
            </Grid>
          </Grid>
          <Typography sx={{ textAlign: "center" }}>
            <Button
              data-testid="capitalweather"
              sx={{ m: 2 }}
              variant="contained"
              onClick={() => navigate("/weather", { state: data.capital[0] })}
            >
              CAPITAL WEATHER
            </Button>
          </Typography>
        </Paper>
      ) : null}
    </div>
  );
};

export default Country;
