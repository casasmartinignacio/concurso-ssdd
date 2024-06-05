import React, { useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import theme from './styles/theme.js';
import Shooter from './components/Shooter.js';
import Box from "@mui/material/Box";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVICE_URL}/api/students`);
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ margin: '50px' }}>
        <h2>Tiro Federal de Mar del Plata</h2>
      </Box>
      <Grid
        container
        alignItems="center"
        sx={{ maxHeight: "100vh", margin: '50px' }}
        gap={2}
      >
        {data?.map((item, index) => (
          <Shooter key={index} name={item} />
        ))}
      </Grid>
    </ThemeProvider>
  );
}

export default App;