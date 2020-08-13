import { Router } from 'express';
import { saveSnippet } from '../controllers/snippet.controller';

const SnippetRoute = Router();

// save snippet
SnippetRoute.post('/save', saveSnippet);

export default SnippetRoute;
