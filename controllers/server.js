const express = require('express');
const usersRouter = require('./routes/users');
const app = express();

app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('Welcome to the User API');
});

// Routes
app.use('/users', usersRouter);

// 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong on the server' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
