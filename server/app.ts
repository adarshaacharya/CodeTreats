import compression from 'compression';
import cors from 'cors';
import express, { Express, Response } from 'express';
import path from 'path';
//  import routes
import CodeRoute from './routes/code.route';
import SnippetRoute from './routes/snippet.route';

// exporess settings
const app: Express = express();
app.set('env', process.env.NODE_ENV);

// handle post request
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(compression());

//routes
app.use('/api/code', CodeRoute);
app.use('/api/snippets', SnippetRoute);

// Serve static addes in prod env
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use('/', express.static(path.join(__dirname, 'client')));

    // index.html for all page routes
    app.get('*', (_, res: Response): void => {
        res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
    });
}

export default app;
