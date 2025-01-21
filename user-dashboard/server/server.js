import express, { json } from 'express';
import pool from './db.js';
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(json());

// Simple route to test the server
app.get('/data', async(req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
