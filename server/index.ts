import compression from 'compression';
import cors from 'cors';
import { config } from 'dotenv';
import express, { Express, Response } from 'express';
import path from 'path';
//  routes
import CodeRoute from './routes/code.route';
import SnippetRoute from './routes/snippet.route';


if (process.env.NODE_ENV !== 'production') {
    config();
}

const app: Express = express();
app.set('env', process.env.NODE_ENV);

// handle post request
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

//routes
app.use('/api/code', CodeRoute);
app.use('/api/code', CodeRoute);


// Serve static addes in prod env
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use('/', express.static(path.join(__dirname, 'client')));

    // index.html for all page routes
    app.get('*', (_, res: Response): void => {
        res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
    });
}

const hostname = 'localhost';
const PORT = process.env.PORT || 5000;

const handleListening = () => console.log(`✅  Listening on: http://${hostname}:${PORT}`);

app.listen(PORT, handleListening);
