const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/test', (req, res) => {
  try {
    res.status(200).json({ body: 'Response', message: 'Success' });
  } catch (err) {
    res.status(500).json({ body: '', message: `Error ${err}` });
  }
})

app.listen(8080, () => {
  console.log(`Example app listening on port 8080`)
});


