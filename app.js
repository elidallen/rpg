const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Define a route to send data to the index.html
app.get('/data', (req, res) => {
  const data = 'This is the data from Express!';
  res.send(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
