import { Router } from 'express';
import { SubmitCode } from '../controllers/code.controller';

const CodeRoute = Router();

CodeRoute.post('/submit', SubmitCode);

export default CodeRoute;
