import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'user_dashboard',
  password: 'postgres',
  port: 5432,
});
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  release();
  console.log('Connected to postgreSQL');
});

export default pool;