import { Router } from 'express';
import { saveSnippet, getSnippetbyId } from '../controllers/snippet.controller';

const SnippetRoute = Router();

// save snippet
SnippetRoute.post('/save', saveSnippet);

// get snippet by id
SnippetRoute.post('/:id', getSnippetbyId);

export default SnippetRoute;
