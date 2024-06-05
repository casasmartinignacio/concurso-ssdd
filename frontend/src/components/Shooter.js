
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { mapError } from '../helpers/errors.js';

const Shooter = ({ name = ''}) => {
  const [messages, setMessages] = useState([]);

  const [shootCount, setShootCount] = useState(0);
  const [errors, setErrors] = useState([]);
  const [rate, setRate] = useState(0);

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  useEffect(() => {
    const eventSource = new EventSource(`${process.env?.REACT_APP_SERVICE_URL}/api/sse`);

    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      if (newMessage?.name && newMessage?.name === name) {
        setMessages(prevMessages => [...prevMessages, newMessage]);
      }
    };
    return () => {
      eventSource.close();
    };
  }, []);

  useEffect(() => {
    if (messages && messages?.length > 0) {
      setShootCount(messages.length);
      const allErrors = messages.map(message => message?.errors).flat();
      setErrors(allErrors.filter(onlyUnique)?.map(item => mapError(item)));
      setRate(messages?.map(message => message?.rate).reduce((acc, rate) => acc + rate, 0) / messages?.length);
    }
  }, [messages])

  return (
    <Grid item xs={3}>
      <Card>
        <CardContent>
          <h2>{name}</h2>
          <Box sx={{ marginBottom: 8 }}>
            <p><strong>Tiros realizados</strong>: {shootCount}</p>
            <p><strong>Tasa:</strong> {rate?.toFixed(2)}</p>
            <p><strong>Errores:</strong> {errors.join(', ')}</p>
          </Box>
  
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Shooter;