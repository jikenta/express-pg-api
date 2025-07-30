const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

app.use(express.json());

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the User API');
});

// Users routes
app.use('/users', usersRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
