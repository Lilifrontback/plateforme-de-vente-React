const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(
  session({
    secret: 'abcd',
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  req.session.data = `qdzdqzdqzd
  ddqzdsdds dazdqdzqdqzdqz qdsdsqds qdsdsqd`;
  req.session.views = (req.session.views || 0) + 1;
  res.json(req.session);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
