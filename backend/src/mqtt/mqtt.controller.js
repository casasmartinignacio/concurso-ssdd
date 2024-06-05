import mqtt from 'mqtt';
import { sendSSE } from '../routes/sse/sse.controller.js';
import { saveToDatabase } from '../repositories/couchdb.js';

const mqttClient = mqtt.connect(process?.env?.MQTT_BROKER_URL);

mqttClient.on('connect', function () {
    mqttClient.subscribe('students', function (err) {
        if (err) {
            console.error(err);
        }
    });
});

mqttClient.on('message', function (topic, message) {
    if (topic === 'students') {
        const data = JSON.parse(message.toString());
        saveToDatabase(data);
        sendSSE(data);
    }
});