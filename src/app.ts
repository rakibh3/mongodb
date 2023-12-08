import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import { notFound } from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1/', router);

// Route handler for GET requests to /
const getController = (req: Request, res: Response) => {
  // Send response text
  res.send('Hello Express JS!');
};

app.get('/', getController);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
