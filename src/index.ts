import express from 'express';
import { config } from 'dotenv';

config();

const app = express();

app.get('/', (req, res) => {
  return res.send(
    `<h1 style='font-size: 36pt; color: blue; text-align: center; padding-top: 3rem;'>Hello, World!<h1/>`
  );
});

app
  .listen(process.env.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
  })
  .on('error', (error) => {
    console.log(error);
  });
