import express from 'express';
import cors from "cors";

import routes from './routes'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true }));


app.use(routes);

export default app;