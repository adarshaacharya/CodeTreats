import { Router } from 'express';
import { getAllSnippets, getSnippetbyId, saveSnippet } from '../controllers/snippet.controller';

const SnippetRoute = Router();

// get all snippets
SnippetRoute.get('/', getAllSnippets);

// save snippet
SnippetRoute.post('/', saveSnippet);

// get snippet by id
SnippetRoute.post('/:id', getSnippetbyId);

export default SnippetRoute;
