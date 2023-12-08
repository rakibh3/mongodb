import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

// Route handler for GET requests to /
const getController = (req: Request, res: Response) => {
  // Send response text
  res.send('Hello Express JS!');
};

app.get('/', getController);

app.use(globalErrorHandler);

export default app;
