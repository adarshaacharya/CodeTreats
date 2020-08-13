import { Router } from 'express';
import { getAllSnippets, getSnippetbyId, saveSnippet } from '../controllers/snippet.controller';

const SnippetRoute = Router();

// get all snippets
SnippetRoute.get('/', getAllSnippets);

// get snippet by id
SnippetRoute.post('/:id', getSnippetbyId);

// save snippet
SnippetRoute.post('/', saveSnippet);

export default SnippetRoute;
