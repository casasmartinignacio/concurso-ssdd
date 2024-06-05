import { Router } from 'express';

const router = Router();

let clients = [];

export function sendSSE(data) {
  clients.forEach(client => client.sseSend(data));
}

router.use((req, res, next) => {
  res.sseSetup = function () {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
  };
  
  res.sseSend = function (data) {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  next();
});

router.get('/sse', (req, res) => {
  res.sseSetup();

  clients.push(res);

  req.on('close', () => {
    clients = clients.filter(client => client !== res);
    res.end();
  });
});

export default router;