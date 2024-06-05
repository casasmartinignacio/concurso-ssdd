import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import routes from './src/routes/routes.js';
import './src/mqtt/mqtt.controller.js';
import { startMockedMqttPublishers } from './src/mock/mqtt.js';

const app = express();
app.use(cors());
app.use(routes);

const port = process?.env?.SERVER_PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

// Mocked mqtt publishers
startMockedMqttPublishers();