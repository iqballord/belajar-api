import express from 'express';
import router from './router';
import morgan from 'morgan';
import { protect } from './modules/auth';

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  console.log('Hello from Expresssss');
  res.status(200);
  res.json({ message: 'hello' });
});
app.use('/api', protect, router);

export default app;
