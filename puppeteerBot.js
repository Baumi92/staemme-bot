const puppeteerBot = require('./puppeteerBot');

app.get('/start-bot', async (req, res) => {
  await puppeteerBot.startBot();
  res.send('Bot gestartet!');
});
