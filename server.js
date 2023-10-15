const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Dein Bot ist bereit!');
});

const puppeteerBot = require('./puppeteerBot');

app.get('/start-bot', async (req, res) => {
  await puppeteerBot.startBot();
  res.send('Bot gestartet!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
