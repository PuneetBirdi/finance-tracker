const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// app.get('/', (req, res) => {
//   res.json({ msg: 'Welcome to the ContactKeeper API.' });
// });

//Connect Database;
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/accounts', require('./routes/accounts'));
app.use('/api/transactions', require('./routes/transactions'));

//Server static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => `Server started on ${PORT}.`);
