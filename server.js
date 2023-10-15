import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Dein Bot ist bereit!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
