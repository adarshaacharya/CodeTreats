import { Router } from 'express';
import { getAllSnippets, getSnippetbyId, saveSnippet } from '../controllers/snippet.controller';
import paginate from '../middlewares/paginate.middleware';
import Snippet from '../models/snippet.model';
const SnippetRoute = Router();

// get all snippets
SnippetRoute.get('/', paginate(Snippet), getAllSnippets);

// get snippet by id
SnippetRoute.get('/:id', getSnippetbyId);

// save snippet
SnippetRoute.post('/', saveSnippet);

export default SnippetRoute;
