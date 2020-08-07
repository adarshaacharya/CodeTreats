import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('hello wolrd');
});

app.use((err: Error, req: Request, res: Response) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(3000, () => console.log('server running'));
