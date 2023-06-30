import http from 'http';
import cors from 'cors';
import express, { Application } from 'express';
import { createHttpTerminator } from 'http-terminator';

import './app.process';
import AppRoute from './routes/app.route';
import AppException from './exception/app.exception';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AppRoute(app);
AppException(app);

export const server = http.createServer(app);
export const httpTerminator = createHttpTerminator({ server });

server.listen(5000, () => {
  console.log(`App listening on port 5000`);
});
